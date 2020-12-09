# Project 4 Front End

Stonks vs. Stinks is an online game where users compete by selecting which stocks they think will perform the best in the coming month and try to be crowned a stock genius!

## Description
Before the beginning of every month, Users on stocks vs stinks are given a budget of $100,000 that they can invest in the stock market. From these selections, the growth of the stocks and the user accounts are calculated and shown on the home page leader board. A the end of the month a winner is chosen and new stocks are picked for the next month.

## Database
The three tables that will be used in the pgAdmin dataset will be user, stock, and userStocks.
### User
The user table will be used to store the following user information:
1) Username
2) Name of the user
3) User ID Number
4) User Password

This information will be used to access the users profile and show information on the user in the leader board.

### Stock
The stock table will be used to store the following Stock information:
1) Stock Ticker Name
2) Stock ID Number

This information will be used to look up stock information through the stock api need to calculate the growth of the stocks.

### UserStock
The user-stock table will be used to connect each users to the stocks that they have chosen and when they have chosen it to start the measuring the change in the stock relative to how much capital they initially invested into it:
1) User-Stock Connection ID
2) User ID Number
2) Stock ID Number
3) Capital
4) Date Created

## ERD
The connection between the User and the Stocks will be many-to-many. As each user will be able to chose multiple different stocks to have in their portfolio and the same stock can be in multiple different peoples portfolio. Each connection will also have a different date and allocated capital to it that will be recorded in the User-Stock table. This stock picks can be deleted and updated in the future. 
### Diagram
