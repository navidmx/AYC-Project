from django.shortcuts import render
import feedparser as fp
import re

left_RSS_feeds = [['New York Times', 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'],
                  ['Reuters', 'http://feeds.reuters.com/Reuters/PoliticsNews']]

right_RSS_feeds = [['Wall Street Journal', 'http://www.wsj.com/xml/rss/3_7085.xml'],
                   ['Fox News', 'http://feeds.foxnews.com/foxnews/politics']]

# Create your views here.
def index(request):
    left_items = []
    right_items = []

    for link in left_RSS_feeds:
        source = link[0]
        feed = fp.parse(link[1])
        for item in feed.entries:
            item.source = source
            item.title2 = str(item.title).encode('UTF-8')
            item.summary2 = cleanhtml(str(item.summary))
            left_items.append(item)

    for link in right_RSS_feeds:
        source = link[0]
        feed = fp.parse(link[1])
        for item in feed.entries:
            item.source = source
            item.title2 = str(item.title).encode('UTF-8')
            item.summary2 = cleanhtml(str(item.summary))
            right_items.append(item)

    left_items.sort(key=lambda x: x.published_parsed, reverse=True)
    right_items.sort(key=lambda x: x.published_parsed, reverse=True)

    for item in right_items:
        print(item.title2)

    return render(request, "index.html", {
        'left_items': left_items,
        'right_items': right_items,
    })

def cleanhtml(raw_html):
  cleanr = re.compile('<.*?>')
  cleantext = re.sub(cleanr, '', raw_html)
  return cleantext