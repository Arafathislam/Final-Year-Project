from bs4 import BeautifulSoup
import requests


url ="https://medex.com.bd/brands"
reponse=requests.get(url)
# print(reponse)

htmlcontent=reponse.content
soup=BeautifulSoup(htmlcontent,'html.parser')

# print(soup.prettify())
# print(soup.title)
# print(soup.title.name)
# print(soup.title.string)
# print(soup.title.parent.name)
# print(soup.p)
# print(soup.find(id="next-page-link-tag"))

# for link in soup.find_all('a'):
#     print(link.get('href'))