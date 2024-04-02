import requests

# URL of the API config endpoint
api_config_url = "https://opentdb.com/api_category.php"

try:
    # Send a GET request to the API config endpoint
    response = requests.get(api_config_url)
    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        # Extract the categories
        categories = data["trivia_categories"]
        # Print the categories
        for category in categories:
            print(category)
    else:
        print("Failed to fetch data. Status code:", response.status_code)
except Exception as e:
    print("An error occurred:", str(e))
