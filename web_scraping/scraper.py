from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time
import csv


options = webdriver.ChromeOptions()

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
wait = WebDriverWait(driver, 10)

#Scraping website link below 
driver.get("")
time.sleep(5)  
while True:
    try:
        load_more_btn = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[@data-aut-id='btnLoadMore']"))
        )
        driver.execute_script("arguments[0].click();", load_more_btn)
        time.sleep(4)  
    except:
        print("No more 'Load more' button or button not clickable.")
        break

cards = driver.find_elements(By.CLASS_NAME, "fTZT3")
print(f" Found {len(cards)} listings.")

data = []

for card in cards:
    try:
        price = card.find_element(By.CSS_SELECTOR, "span[data-aut-id='itemPrice']").text
    except:
        price = ""
    try:
        details = card.find_element(By.CSS_SELECTOR, "span[data-aut-id='itemDetails']").text
    except:
        details = ""
    try:
        title = card.find_element(By.CSS_SELECTOR, "span[data-aut-id='itemTitle']").text
    except:
        title = ""
    try:
        location = card.find_element(By.CSS_SELECTOR, "span[data-aut-id='item-location']").text
    except:
        location = ""

    data.append({
        "Price": price,
        "Details": details,
        "Title": title,
        "Location": location,
    })

# Save to CSV
filename = "rooms_bhopal_3bhk.csv"
with open(filename, "w", newline="", encoding="utf-8") as csvfile:
    fieldnames = ["Price", "Details", "Title", "Location"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(data)

print(f" Data saved to '{filename}'")

driver.quit()
