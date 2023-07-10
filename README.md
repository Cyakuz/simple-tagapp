# Urun-EtiketApp Documentation
<div align="center">
Urun-EtiketApp is a simple tag system for products found in bakeries and cafes. It allows you to list and manage the components, allergen warnings, prices, and names of the products. You can add products to different categories: "Dolap" (Cabinet), "İçecekler" (Beverages), and "Tezgah" (Counter).

  ---
The application uses Json Server to simulate a RESTful API. The Json Server listens on port 3000. Please make sure the Json Server is running before using the application. The application also includes a basic admin page. Note that the authentication mechanism is not implemented. To log in, use the username "admin" and the password "1234". Ensure that the Json Server is up and running to allow successful login. You can enhance the application by adding a database and an authentication system in the future. This project was created while learning the React library.
</div>


# Installation and Setup
To run the application, follow these steps:

## Start the Json Server by running the following command:

```bash
-npx json-server --watch api/db.json --port 3000
```

## Start the React Server by running the command:
 ```bash
npm start
```

# Usage
Once the application is up and running, you can perform the following actions:

**Add Products to the Cabinet:** Navigate to the "Dolap" (Cabinet) tab and add products by specifying the "tur" (type) as "dolap".

**Add Beverages**: Go to the "İçecekler" (Beverages) tab and add products with the "tur" (type) set to "icecek".

**Add Products to the Counter:** Visit the "Tezgah" (Counter) tab and add products by setting the "tur" (type) as "tezgah".

**Admin Page:** Access the admin page by logging in with the username "admin" and the password "1234". Note that the authentication mechanism is basic and can be enhanced in the future.

Please note that this is a simple application created for learning purposes. It provides basic functionality for managing products and categories. You can extend the application by adding a database and implementing a more robust authentication system if needed.

# Contributing
Contributions to Urun-EtiketApp are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request. Your contributions will help enhance the functionality and user experience of the application.

# License
Urun-EtiketApp is open source and released under the MIT License. Feel free to modify and distribute the application as per the terms of the license.

# Acknowledgements
Urun-EtiketApp was developed as part of the learning process for the React library. Special thanks to the React community for their valuable resources, tutorials, and support.

# Contact
cyakuz@gmail.com
