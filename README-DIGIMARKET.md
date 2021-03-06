## About this project

This project is a mere Application Prototyping attempt to deploy the same instance of the WebApplication built off of React JS into different Cloud Server Platforms.

## What kind of Web Application?

**Reference of the templates:**

- (Dashboard/Login/Register)
  - (Django) https://django-dashboard-shards.appseed.us/
  - (React) https://coreui.io/react/
- (Landing Page)
  - https://inovatik.com/evolo-free-startup-landing-page-template.html

## Cloud Server Platforms

- [Github Pages](https://pages.github.com/)
  - Deployed with 'gh-pages' module.
- [Heroku](https://heroku.com)
  - Heroku CLI installed and deployed with buildpack mars/
    create-react-app;
  - https://github.com/mars/create-react-app-buildpack
- [NextJS](https://nextjs.org/)
  - Very straighforward. Just deployed with **Vercel CLI** by connecting my GithubRepo.
- [Google Cloud Platform (GCP) - App Engine](https://cloud.google.com/appengine)
  - **server:** southamerica-east1gcloud
  - **config file:** app.yaml
  - Reference: https://medium.com/javascript-in-plain-english/quickly-deploy-your-react-app-on-googles-app-engine-6bb97480cc9c
- [Amazon Web Services (AWS) - EC2](https://aws.amazon.com/ec2/)
  - **server:** South America (Sao Paulo) sa-east-1
  - Reference: https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af

## Development Milestones

- [x] Setup Create React App (~5mins)
- [x] Include Dashboard Template (~30mins)
- [x] Setup React Routing (~10mins)
- [x] Include Landing Page Template (~20mins)
- [x] Setup Authentication HARDCODED in component (~10mins)
- [x] Deploy (~60mins)

In total we expect the total delivery time, comprised in all of the aforementioned steps, to take approximately 1 hour and 20 minutes to prepare the base instance of the Web App that gets replicated. Additionally, for each cloud server, we expect to utilize about 1 hour to setup the configuration and deployment steps.

## Development Strategy

Each cloud server deployment configuration files will be compartmentalized into individual branches off of the same Repository. For Example:

- **Github Pages:** digimarket/gh-pages
- **Heroku:** digimarket/heroku
- **NextJS:** digimarket/nextjs
- **GCP App Engine:** digimarket/gcp-appengine
- **AWS EC2:** digimarket/aws-ec2

## Author

**Giwoo G Lee**  
[Linkedin](https://linkedin.com/in/leegiwoo)  
JavaScript Full Stack Developer
