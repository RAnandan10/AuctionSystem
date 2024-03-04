## Authors
#### - Rajagopal Anandan
#### - Nitish Venkatesh Septankulam Ramakrishnan 

## Project Overview
The Scalable Auction System operates as a dynamic and responsive live auction website, where it serves as a platform to engage in live bidding for items in various categories. Users can sign in/ create an account, after which they can bid on items, create bids for items they wish/ intend to sell, etc. Users can also manage their portfolio/ items in their dashboard section.

## Technologies Used
Integral components we used for this project are:  
1. React and Express.js - For application development  
2. Docker - To containerize the application  
3. Kubernetes - To autoscale based on traffic  
4. RestAPIs - To perform various tasks  
5. MySQL - Relational DB for user details  
6. Redis key value store - For auction details storage  
7. NATS Messaging Server  

## Architecture Diagram
![DSC-Auction System - Page 1](https://github.com/RAnandan10/Final-Project-Scalable-Auction-System/assets/112794338/fd91c157-6932-4365-9f18-fddc2da363c0)

## Steps to run 

### Clone the respository locally
```bash
git clone 
```

### Install ingress-nginx

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/baremetal/deploy.yaml
```

### Create required secrets

- Create the CLOUDINARY_API_KEY secret

```bash
kubectl create secret generic cloudinary-api-key-secret --from-literal=CLOUDINARY_API_KEY=<Your Secret Here>
```

- Create the CLOUDINARY_CLOUD_NAME secret

```bash
kubectl create secret generic cloudinary-cloud-name-secret --from-literal=CLOUDINARY_CLOUD_NAME=<Your Secret Here>
```

- Create the CLOUDINARY_API_SECRET secret

```bash
kubectl create secret generic cloudinary-api-secret-secret --from-literal=CLOUDINARY_API_SECRET=<Your Secret Here>
```

- Create the JWT_KEY secret

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<Your Secret Here>
```

- Create the MYSQL_ROOT_PASSWORD secret

```bash
kubectl create secret generic mysql-root-password-secret --from-literal=MYSQL_ROOT_PASSWORD=<Your Secret Here>
```
### Start skaffold

```basb
skaffold dev
```

### Ingress port forwarding

```bash
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
```

### Open in browser
- The project will now be available on localhost:8080 in your browser



