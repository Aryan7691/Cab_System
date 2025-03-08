# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include:
- `email` (string, required): User's email address.
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/profile` Endpoint

### Description

Retrieves the profile information of the authenticated user.

### HTTP Method

`GET`

### Headers

- `Authorization` (string, required): Bearer token for authentication in header or token in cookie.

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.



## `/users/logout` Endpoint

### Description

Logs out the user and blacklists the token.

### HTTP Method

`GET`

### Headers

- `Authorization` (string, required): Bearer token for authentication in header or token in cookie.

### Example Response

- `message` (string): Confirmation message indicating successful logout.



## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters).
  - `lastname` (string, optional): Captain's last name.
- `email` (string, required): Captain's email address (must be a valid email).
- `status` (string): inactive (default).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle capacity (minimum 1).
  - `vehicleType` (string, required): Type of vehicle (must be one of 'car', 'motorcycle', 'auto').

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (string): JWT Token


## `/captains/login` Endpoint

### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include:
- `email` (string, required): Captain's email address.
- `password` (string, required): Captain's password (minimum 6 characters).

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
   - `status` (string): inactive (default).
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (string): JWT Token


## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the authenticated captain.

### HTTP Method

`GET`

### Headers

- `Authorization` (string, required): Bearer token for authentication in header or token in cookie.

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
   - `status` (string): inactive (default).
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle capacity.
    - `vehicleType` (string): Type of vehicle.



## `/captains/logout` Endpoint

### Description

Logs out the captain and blacklists the token.

### HTTP Method

`GET`

### Headers

- `Authorization` (string, required): Bearer token for authentication in header or token in cookie.

### Example Response

- `message` (string): Confirmation message indicating successful logout.