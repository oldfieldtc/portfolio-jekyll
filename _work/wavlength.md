---
name: Wavlength
thumbnail: https://assets.tommyoldfield.co.uk/wavlength-thumbnail
slug: wavlength
---

# Wavlength
Wavlength was a web application that allowed users to generate playlists based off their Apple Music listening history and recommendations.

Wavlength was developed as my final project for <abbr title="CS50's Web Programming with Python and JavaScript course">CS50w</abbr> and was built using [Django](https://www.djangoproject.com/), the [Apple Music API](https://developer.apple.com/documentation/applemusicapi), and the [Last.fm API](https://www.last.fm/api).

{% include image.html filename="wavlength-homepage" alt="Homepage of the Wavlength web app." %}

Users could log into their Apple Music account through the Apple Music API and once logged in, they would be presented with two playlist choices: "For you condensed", and "Recent recommendations".

{% include image.html filename="wavlength-playlists" alt="The 'Choose a playlist' page in the Wavlength app. Two tiles are displayed: For you condensed - A playlist that picks one song from every album listed on the 'For You' section in Apple Music; Recent recommendations - A playlist that picks songs from similar artists based on the user's recent listening activity." %}

Selecting the "For you condensed" tile generates a playlist consisting of one song from each of the albums in Apple Music's "For you" section. Selecting the "Recent recommendations" tile generates a playlist that picks songs from similar artists based on the user's recent listening activity. The similar artists are chosen through the Last.fm API and the chosen song is picked from the artist's popular songs.

Once the playlist has been generated, it creates the playlist within your Apple Music account and displays the list of songs and artists on the website.

The [Wavlength walkthrough video](https://www.youtube.com/watch?v=MkgXT8j7JPQ) shows all of the features of the app, including registering and linking your Apple Music account, updating account settings, and generating and viewing the playlists.