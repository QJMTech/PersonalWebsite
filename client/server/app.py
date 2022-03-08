from flask import Flask, send_from_directory, request
from flask_restful import Api, Resource, reqparse
import requests
import json
import datetime
import time as timemodule
from dateutil.relativedelta import relativedelta
from apscheduler.schedulers.background import BackgroundScheduler



# DECLARE FLASK APP
app = Flask(__name__)
api = Api(app)


# START SCHEDULER
scheduler = BackgroundScheduler()
scheduler.start()


@app.route("/submit", methods=["POST"])
def submit_teetimes():
    # KILL PRIOR JOBS
    try:
        scheduler.remove_job('teetime')
    
    except:
        pass

    # GET INFO FROM WEBSITE
    desiredcourse = request.form["course"]
    desiredtime = request.form["time"]
    desirednum = request.form["numoftimes"]

    # CHANGE DESIRED TIME TO TIME AND DATE TWO WEEKS OUT
    desiredtime = (
        str(datetime.date.today() + relativedelta(weeks=+2, days=+1))
        + " "
        + desiredtime
    )

    # SCHEDULE JOB TO HAPPEN WHEN MIDNIGHT ROLLS OVER
    scheduler.add_job(
        lambda: get_teetime(desiredcourse, desiredtime, desirednum),
        "cron",
        hour=0,
        id="teetime",
    )

    return "Your " + desirednum + " teetime(s) at " + desiredcourse + " have been scheduled! Check back tomorrow!"


def get_teetime(course, time, num):
    timemodule.sleep(1)
    # CHANGING COURSE VARIABLES DEPENDING ON COURSE CHOSEN
    if course == "Victory":
        booking_class = "3450"
        schedule_id = "3844"
        course_id = "20163"
        course_name = "Verrado - Victory Club"

    else:
        booking_class = "3382"
        schedule_id = "3813"
        course_id = "20161"
        course_name = "Verrado - Founders Club"

    with requests.Session() as sesh:
        # SEND POST REQUEST TO LOGIN URL
        login(sesh, booking_class)

        # SAVE PLAINTEXT TEXT INFO FROM GET REQUEST
        available_times = retrieveTeeTimes(sesh, booking_class, schedule_id, time)

        # CHOOSE TEETIMES
        final_tee_times = parseTeeTimes(available_times, time, num)

        print(final_tee_times)

        # RESERVES X AMOUNT OF TEETIMES
        for x in final_tee_times:
            reserveTeeTime(sesh, schedule_id, course_id, course_name, booking_class, course, x)


########################
### HELPER FUNCTIONS ###
########################
def login(sesh, booking_class):
    loginHeaders = {
        "authority": "foreupsoftware.com",
        "method": "POST",
        "path": "/index.php/api/booking/users/login",
        "scheme": "https",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "api-key": "no_limits",
        "content-length": "96",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "cookie": "_ga=GA1.2.460092786.1603738296; __stripe_mid=14dd1345-f8c4-4a38-a96d-1b5de833c86c9a18b9; PHPSESSID=8j7pf956mmj14vm7phn4argqc5; _gid=GA1.2.237289583.1619110067; __stripe_sid=13303e3b-6f1f-4ca8-9ff8-7d594cdb98817cb43a; token=",
        "origin": "https://foreupsoftware.com",
        "referer": "https://foreupsoftware.com/index.php/booking/20161/3813",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 Edg/90.0.818.42",
        "x-newrelic-id": "VwcGVVBVDBABVllXBAYPUVwE",
        "x-requested-with": "XMLHttpRequest",
    }
    loginData = {
        "username": "jewell500@msn.com",
        "password": "golfer",
        "booking_class_id": booking_class,
        "api-key": "no_limits",
        "course_id": "20161",
    }
    LOGIN_URL = "https://foreupsoftware.com/index.php/api/booking/users/login"

    # LOGIN LOGIC
    sesh.post(LOGIN_URL, data=loginData, headers=loginHeaders)


def retrieveTeeTimes(sesh, booking_class, schedule_id, desiredtime):
    # TEESHEET INFO
    teeSheetHeaders = {
        "authority": "foreupsoftware.com",
        "method": "GET",
        "path": "/index.php/api/booking/times?time=all&date=04-22-2021&holes=18&players=0&booking_class="
        + booking_class
        + "&schedule_id="
        + schedule_id
        + "&schedule_ids%5B%5D=0&schedule_ids%5B%5D="
        + schedule_id
        + "&schedule_ids%5B%5D="
        + schedule_id
        + "&specials_only=0&api_key=no_limits",
        "scheme": "https",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "api-key": "no_limits",
        "cookie": "_ga=GA1.2.460092786.1603738296; __stripe_mid=14dd1345-f8c4-4a38-a96d-1b5de833c86c9a18b9; PHPSESSID=8j7pf956mmj14vm7phn4argqc5; _gid=GA1.2.237289583.1619110067; __stripe_sid=13303e3b-6f1f-4ca8-9ff8-7d594cdb98817cb43a; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJmb3JldXBzb2Z0d2FyZS5jb20iLCJhdWQiOiJmb3JldXBzb2Z0d2FyZS5jb20iLCJpYXQiOjE2MTkxMjAxNTcsImV4cCI6MTYyMTcxMjE1NywidWlkIjoiMTM4MzkxMjAiLCJsZXZlbCI6MCwiY2lkIjoiMjAxNjEiLCJlbXBsb3llZSI6ZmFsc2V9.0cPa1JNlY9MsD543ZlpBB10ycbiHDDVbMnQh_xpGTjN420O9__cltPE0hEGUIEE0_DuCIH4gteJyl-qlAH0dkg",
        "referer": "https://foreupsoftware.com/index.php/booking/20161/3813",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 Edg/90.0.818.42",
        "x-newrelic-id": "VwcGVVBVDBABVllXBAYPUVwE",
        "x-requested-with": "XMLHttpRequest",
    }
    teeSheetParams = {
        "time": "all",
        "date": desiredtime[5:8] + desiredtime[8:10] + "-" + desiredtime[0:4],
        "holes": "18",
        "players": "4",
        "booking_class": booking_class,
        "schedule_id": schedule_id,
        "schedule_ids[]": "0",
        "schedule_ids[]": schedule_id,
        "schedule_ids[]": schedule_id,
        "specials_only": "0",
        "api_key": "no_limits",
    }
    TEE_SHEET_URL = (
        "https://foreupsoftware.com/index.php/api/booking/times?time=all&date="
        + desiredtime[5:8]
        + desiredtime[8:10]
        + "-"
        + desiredtime[0:4]
        + " &holes=18&players=0&booking_class="
        + booking_class
        + "&schedule_id="
        + schedule_id
        + "&schedule_ids%5B%5D=0&schedule_ids%5B%5D="
        + schedule_id
        + "&schedule_ids%5B%5D="
        + schedule_id
        + "&specials_only=0&api_key=no_limits"
    )

    # TEESHEET RETRIEVE LOGIC
    # SEND GET REQUEST TO RETRIEVE TEETIME INFORMATION
    result = sesh.get(TEE_SHEET_URL, params=teeSheetParams, headers=teeSheetHeaders)
    return result.text


def parseTeeTimes(getResult, desired_time, num):
    # TURN STRING OF LISTS INTO LIST OF DICTIONARIES
    lists = json.loads(getResult)

    # CREATE BLANK LIST AND FILL WITH TIMES
    timesList = []
    for listing in lists:
        timesList.append(listing["time"][11:16])

    # ADD ALL TIMES THAT ARE DESIRED TIME OR LATER TO SECONND LIST TO BE USED HENCEFORTH
    applicableTimes = []
    for individualTimes in timesList:
        if individualTimes >= str(desired_time[11:16]):
            applicableTimes.append(individualTimes)

    # IF ONLY ONE TEETIME IS NEEDED JUST GRAB FIRST ON PARSED LIST AND RETURN,
    # THUS NOT PROCEEDING TO SECOND LOOP
    if int(num) == 1:
        # INSTANTIATE EMPTY LIST
        finalTeeTimes = []
        finalTeeTimes.append(applicableTimes[0])

    else:
        # ITERATE THROUGH PRUNED TIME LIST AND ATTEMPT TO FIND X AMOUNT OF TEETIMES BACK TO BACK
        # OUTER LOOP
        x = 0
        while x + 3 < len(applicableTimes):
            # INSTANTIATE EMPTY LIST AT BEGINNING OF LOOP
            finalTeeTimes = []

            # MAKE LIST
            finalTeeTimes.append(applicableTimes[x])

            # SEE IF NEXT TEETIME IN APPLICABLE TEETIMES LIST
            if (
                datetime.datetime.strptime(applicableTimes[x], "%H:%M")
                + relativedelta(minutes=+9)
                == datetime.datetime.strptime(applicableTimes[x + 1], "%H:%M")
                and int(num) >= 2
            ):
                finalTeeTimes.append(applicableTimes[x + 1])
                # SEE IF NEXT TEETIME IN APPLICABLE TEETIMES LIST
                if (
                    datetime.datetime.strptime(applicableTimes[x + 1], "%H:%M")
                    + relativedelta(minutes=+9)
                    == datetime.datetime.strptime(applicableTimes[x + 2], "%H:%M")
                    and int(num) >= 3
                ):
                    finalTeeTimes.append(applicableTimes[x + 2])
                # BREAK ONCE LIST COMPLETE
                break
            else:
                pass
            # INCREMENT X
            x += 1

    # SET UP DATE CORRECTLY
    y = 0
    while y < len(finalTeeTimes):
        finalTeeTimes[y] = desired_time[0:10] + " " + finalTeeTimes[y]
        y += 1

    # RETURN FINAL LIST
    return finalTeeTimes


def reserveTeeTime(sesh, schedule_id, course_id, course_name, booking_class, course, teetime):
    reservationData = "{\"teesheet_id\":\"" + schedule_id + "\",\"teesheet_holes\":\"18\",\"time\":\"" + teetime + "\",\"course_id\":\"" + course_id + "\",\"course_name\":\"" + course_name + "\",\"schedule_name\":\"" + course + "\",\"schedule_id\":\"" + schedule_id + "\",\"available_spots\":4,\"minimum_players\":1,\"trade_min_players\":\"4\",\"trade_available_players\":4,\"foreup_trade_discount_rate\":1,\"holes\":18,\"has_special\":false,\"special_discount_percentage\":0,\"group_id\":false,\"require_credit_card\":0,\"booking_class_id\":" + booking_class + ",\"booking_fee_required\":false,\"booking_fee_price\":false,\"booking_fee_per_person\":false,\"green_fee_tax_rate\":false,\"green_fee_tax\":0,\"guest_green_fee_tax_rate\":false,\"guest_green_fee_tax\":0,\"cart_fee_tax_rate\":false,\"cart_fee_tax\":0,\"guest_cart_fee_tax_rate\":false,\"guest_cart_fee_tax\":0,\"special_id\":false,\"foreup_discount\":true,\"pay_online\":\"no\",\"green_fee\":0,\"guest_green_fee\":0,\"rate_type\":\"walking\",\"players\":4,\"carts\":false,\"cart_fee\":false,\"promo_code\":\"\",\"promo_discount\":0,\"player_list\":[{\"position\":2,\"name\":\"Guest\",\"person_id\":null},{\"position\":3,\"name\":\"Guest\",\"person_id\":null},{\"position\":4,\"name\":\"Guest\",\"person_id\":null}],\"duration\":1,\"hide_prices\":false,\"show_course_name\":false,\"min_players\":1,\"max_players\":4,\"notes\":[],\"customer_message\":\"\",\"guest_cart_fee\":false,\"total\":0,\"purchased\":false,\"pay_players\":4,\"pay_carts\":false,\"pay_total\":0,\"pay_subtotal\":0,\"paid_player_count\":0,\"discount_percent\":1,\"discount\":0,\"details\":\"\",\"pending_reservation_id\":\"TTID_0422205348r9c7p\",\"allow_mobile_checkin\":0,\"foreup_trade_discount_information\":[],\"airQuotesCart\":[{\"type\":\"item\",\"description\":\"Green Fee\",\"price\":0,\"quantity\":4,\"subtotal\":0}],\"preTaxSubtotal\":0,\"estimatedTax\":0,\"subtotal\":0,\"available_duration\":null,\"increment_amount\":null}"
    reservationHeaders = {
        'authority': 'foreupsoftware.com',
        'method': 'POST',
        'path': '/index.php/api/booking/users/reservations',
        'scheme': 'https',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'api-key': 'no_limits',
        'content-length': '1680',
        'content-type': 'application/json',
        'cookie': '_ga=GA1.2.460092786.1603738296; __stripe_mid=14dd1345-f8c4-4a38-a96d-1b5de833c86c9a18b9; PHPSESSID=8j7pf956mmj14vm7phn4argqc5; _gid=GA1.2.237289583.1619110067; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJmb3JldXBzb2Z0d2FyZS5jb20iLCJhdWQiOiJmb3JldXBzb2Z0d2FyZS5jb20iLCJpYXQiOjE2MTkxMzM4NzUsImV4cCI6MTYyMTcyNTg3NSwidWlkIjoiMTM4MzkxMjAiLCJsZXZlbCI6MCwiY2lkIjoiMjAxNjEiLCJlbXBsb3llZSI6ZmFsc2V9.V4DhVdCFRHCy7LEaxCNcGVQeyEWGtqmEWhpX32vE0jqXkHB2v91L0_szUmikOSEn787WaZQ58maFblss0Eogmw; __stripe_sid=dfbc32bc-c643-4b69-8513-97a70b2237894cc1c2',
        'origin': 'https://foreupsoftware.com',
        'referer': 'https://foreupsoftware.com/index.php/booking/20161/' + schedule_id,
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 Edg/90.0.818.42',
        'x-newrelic-id': 'VwcGVVBVDBABVllXBAYPUVwE',
        'x-requested-with': 'XMLHttpRequest'
        }
    RESERVATION_URL = 'https://foreupsoftware.com/index.php/api/booking/users/reservations'

    # GET TEETIME LOGIC #
    result = sesh.post(RESERVATION_URL, data = reservationData, headers = reservationHeaders)

    print(result.text)


if __name__ == "__main__":
    app.debug = True
    app.run()
