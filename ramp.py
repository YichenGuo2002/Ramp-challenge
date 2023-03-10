import requests
from bs4 import BeautifulSoup
import re

def scrapeRamp():
    URL = "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    scripts = soup.find_all('section', {'id':re.compile('11')})
    str = ""
    for script in scripts:
        main = script.find('main', {'id':re.compile('22')})
        article = main.find('article', {'id':re.compile('335')})
        str += article.find('p')['value']
    return str

print(scrapeRamp())
