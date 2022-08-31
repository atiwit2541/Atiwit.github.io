import requests
import json 

## create collection ##
data_in = {
      "title": "ร้านอาหารเอาใจนักศึกษา",
      "description": "ร้านอาหารที่ให้เยอะ แต่จ่ายน้อย",
      "extent": {
          "spatial":{
              "bbox": [[-180, -90, 180, 90]],
              "crs": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
          }
      },
      "itemType":"Feature",
      "links":[]
  }

url = "https://v2k.vallarismaps.com/core/api/1.0-beta/collections"

payload = str(data_in).replace("'", '"')
headers = {
  'API-Key': 'ypSMTg6baXQJvgrEegbkunhi410eWHQsW4gwhRp7kc77AYRQMigbdKHfznen28AE',
  'Content-Type': 'application/json'
}
response = requests.request("POST", url, headers=headers, data=payload.encode('utf-8'))
res_json = response.json()
print(response.text)


collection = res_json["id"]

## import data to collection ##

# collection  = '6034dd3f118d48755a8b000c'

# data = {
#     "type": "FeatureCollection",
#     "features": [
#         {
#             "type": "Feature",
#             "geometry": {
#                 "type": "Point",
#                 "coordinates": [
#                     102.82087124208624,
#                     16.45415183826397
#                 ]
#             },
#             "properties": {
#                 "name": "เย็น เย็น"
#             }
#         },
#         {
#             "type": "Feature",
#             "geometry": {
#                 "type": "Point",
#                 "coordinates": [
#                     102.82094568014143,
#                     16.45434979818847
#                 ]
#             },
#             "properties": {
#                 "name": "เพลิน เพลิน"
#             }
#         }
#     ]
# }


url = "https://v2k.vallarismaps.com/core/api/1.0-beta/collections/"+collection+"/items"

payload= str(data).replace("'", '"')
headers = {
  'Authorization': '',
  'API-Key': 'ypSMTg6baXQJvgrEegbkunhi410eWHQsW4gwhRp7kc77AYRQMigbdKHfznen28AE',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload.encode('utf-8'))

print(response.text)