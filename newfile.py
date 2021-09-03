from datetime import datetime   
alarm_time = input("Enter the time of alarm to be set:HH:MM\n")
alarm_hour=alarm_time[0:2]
alarm_minute=alarm_time[3:5]
print("Setting up alarm..")
while True:
    now = datetime.now()
    current_hour = now.strftime("%I")
    current_minute = now.strftime("%M")
    if(alarm_hour==current_hour):
        if(alarm_minute==current_minute):
            print("Wake Up Errol! its",alarm_time)
            break