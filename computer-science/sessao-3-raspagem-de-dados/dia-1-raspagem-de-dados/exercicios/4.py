import requests
from parsel import Selector


URL = 'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'
BASE_URL = 'http://books.toscrape.com'
response = requests.get(URL)
selector = Selector(text=response.text)

title = selector.css('div.col-sm-6 h1::text').get()
price = selector.css('p.price_color::text').re_first(r"£\d+\.\d{2}")
description = selector.css('#product_description ~ p::text').get()
if description.endswith('...more'):
    description = description[:-len('...more')]
url_image = selector.css('div.item img::attr(src)').get()[5:]

print(f'{title}, {price}, {description}, {BASE_URL + url_image}')
