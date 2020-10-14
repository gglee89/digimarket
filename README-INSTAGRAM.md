## Specifics on Instagram OAuth

Instagram's OAuth implementation feasibility check on a Django Application.
https://developers.facebook.com/docs/instagram-basic-display-api/reference/oauth-access-token/

## Milestones

- [x] Check official documentation
- [] Check online tutorials with NodeJS
  - [] https://medium.com/crowdbotics/add-instagram-login-to-your-nodejs-app-using-passportjs-be7e8e31efb8
- [] Check online tutorials with Django

## Core aspects

- About Access Tokens: https://developers.facebook.com/docs/instagram-basic-display-api/reference/oauth-access-token
- Accessing Instagram data needs validation from Facebook.
- Legacy API isn't supported anymore (https://www.instagram.com/developer/)

- API Overview

  - https://developers.facebook.com/docs/instagram-api/overview

- Facebook App Development

  - https://developers.facebook.com/docs/apps
  - https://developers.facebook.com/docs/graph-api/using-graph-api/
  - https://developers.facebook.com/docs/graph-api/explorer

- Difference between 'development' & 'live' mode

  - https://developers.facebook.com/docs/apps#development-mode
  - https://developers.facebook.com/docs/apps#live-mode

- Business & Creator Account on Instagram
  - [Business Account](https://help.instagram.com/502981923235522?fbclid=IwAR3_DUFXVWGUtod4ADmjV6YPiV_H81twIRmVSyMWhOAMAyHiF8uKecG9vRI)
  - [Creator Account](https://help.instagram.com/1158274571010880?fbclid=IwAR2rtSOfZ0XCEOy-CSEFmS6ELZdSEm6_R-xFukcmSTJSnqfm17KLFDHjSo4)

## Progress

- **10/14 - 2pm:** Initially there seems to be no major obstable ot implement OAuth 2.0 with Instagram.
- **10/14 - 2:45pm:** Ability to understand the architecture implemented on Graph API. Namely, a **"Social Graph"**.
- **10/14 - 4:39pm:**
  - Discovered a Data Marketing Analytics company. (https://metricool.com/metricoolanalytics/)
  - Understand the requirements to implement an Instagram App in regards to Business & Creator's account.

## Analysis (made by Giwoo G Lee)

From the official documentation, Instagram has now (since June 2020) moved its API to [Facebook's Graph API](https://developers.facebook.com/docs/graph-api/overview/). The foundation of the Graph API, is that it utilizes:

- **nodes**
  - use nodes to get data about individual objects.
  - basically individual objects, such as a User, a Photo, a Page, or a Comment
- **edges**
  - use edges to get collections of objects connected to a node, or to publish objects to those collections.
  - connections between a collection of objects and a single object, such as Photos on a Page or Comments on a Photo
- **fields**
  - use fields to specify which data you want included in responses.
  - data about an object, such as a User's birthday, or a Page's name

<hr>

In summary, all CRUD operations can be performed as follows:

**Object IDs**

```js
curl -i -X GET \
  "https://graph.facebook.com/object-id
    ?access_token=your-access-token"
```

**Object Fields and Edges**  
_To run the examples below you will need to get an access token with the needed permissions._  
_Get access tokens for each request as well as your [Facebook User ID](https://www.facebook.com/help/community/question/?id=10211230768232686) using the [Graph API Explorer tool](https://developers.facebook.com/docs/graph-api/explorer)._

```js
// Get fields and edges on a User.

curl -i -X GET \
  "https://graph.facebook.com/your-facebook-user-id
    ?fields=name
    &access_token=your-access-token"
```

```js
//  Get all of the photos owned by you, you query the node's photos edge:

curl -i -X GET \
  "https://graph.facebook.com/your-facebook-user-id/photos
     ?access_token=your-access-token"
```

```js
// Update fields with POST operations. For example, you could update your email field like this:

curl -i -X POST \
  "https://graph.facebook.com/your-facebook-user-id
    ?email=you@your-email.com
    &access_token=your-access-token"
```

<hr>

Versions are important to be considered, as to be aware on what functionality it currently supports and on which new one is to be available.

```js
// here's a call to version 2.9

curl -i -X GET \
  "https://graph.facebook.com/v2.9/your-facebook-user-id/photos
    ?access_token=your-access-token"
```

<hr>

## Using Graph API

https://developers.facebook.com/docs/graph-api/using-graph-api/

### Access Token

Access tokens allow your app to access the Graph API. They typically perform two functions:

- They allow your app to access a User's information without requiring the User's password.
- They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.
