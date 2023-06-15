"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../../comps/footer";
import { useEffect, useState } from "react";
import { useItemsCartContext } from "../../../hooks/useItemsCartContext";
import { useAuthContext } from "../../../hooks/useAuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import SubscribeEmail from "../../../comps/subscribe";

const BlogPage = () => {
  // redirecting
  const { push } = useRouter();

  // importing user data from authContext
  const { user, dispatchUser } = useAuthContext();

  // Cart Context fetch items
  const { items, dispatch } = useItemsCartContext();

  // console.log(items);

  // Product FETCH
  const [allItems, setallItems] = useState([]);

  // setselectSortingValue
  const [selectSortingValue, setselectSortingValue] = useState();

  // console.log(selectSortingValue);

  // console.log(selectSortingValue);

  const [selectedItemForDetail, setselectedItemForDetail] = useState();

  // console.log(selectedItemForDetail);

  // Add to Cart and dealing with duplicate function
  const [addItemToCart, setaddItemToCart] = useState(); // for adding items to the cart
  const [changeValue, setChangeValue] = useState(0); // for adding items to the cart

  // Show Services by default
  const [showServices, setshowServices] = useState(true);

  // Show Cart
  const [showCart, setshowCart] = useState(false);

  // Dealing with Sorting and Filters and pagination
  const [showSortedFiltered, setShowSortedFiltered] = useState([]);

  // console.log(showSortedFiltered);

  // Show League of Legend Only Items
  const [showOnlyLeagueofLegendsItems, setShowOnlyLeagueofLegendsItems] =
    useState(false);

  // Show League of Legend Only Items
  const [showOldSchoolRuneScape, setShowOldSchoolRuneScape] = useState(false);

  // Show League of Legend Only Items
  const [showPubg, setShowPubg] = useState(false);

  // Show League of Legend Only Items
  const [showCyberpunk, setShowCyberpunk] = useState(false);

  // Show League of Legend Only Items
  const [showAllItems, setShowAllItems] = useState(true);

  // Search Funtionality
  const [searchInput, setSearchInput] = useState();

  // error not finding searched item
  const [SearchFound, setSearchFound] = useState();

  // error not finding searched item
  const [successfulOrder, setSuccessfulOrder] = useState(false);

  // error not finding searched item
  const [errorToPlaceOrder, setErrorToPlaceOrder] = useState(false);

  // user data after fetch
  const [UserdataNameAddress, SetUserdataNameAddress] = useState();

  // if no item is added and want to see the cart, will show error
  const [ShowNoItemAddedError, setShowNoItemAddedError] = useState(false);

  // show to user that added to Subscribed Email service test ^ _ ^
  const [showSubscribedTrue, setShowSubscribedTrue] = useState(false);

  useEffect(() => {
    if (addItemToCart !== undefined) {
      const localStoragecurrentItems = JSON.parse(
        localStorage.getItem("GamingcartItems")
      );

      const checkforduplicatefilter = localStoragecurrentItems.filter(
        (item) => {
          //    console.log(item._id, addItemToCart._id);
          return item._id === addItemToCart._id;
        }
      );

      if (checkforduplicatefilter.length >= 1) {
        setTimeout(() => {
          // setDuplicateItemDealWith(checkforduplicatefilter);
          //  console.log("we are dealing with duplicate");
          //dealing with the duplicate
          // const ItemIncresedNumberofItems = checkforduplicatefilter.map(
          //   (item) => {
          //     item.numberofitem += 1;
          //     return item;
          //   }
          // );

          const ItemIncresedNumberofItems = checkforduplicatefilter.map(
            (item) => {
              item.numberofitem += 1;
              return item;
            }
          );
          // ItemIncresedNumberofItems

          // filtering the duplicated in the local storage and just keeping one

          const filteringanyextra = localStoragecurrentItems.filter((item) => {
            //    console.log(item._id, addItemToCart._id);
            return item._id !== addItemToCart._id;
          });
          //    console.log(filteringanyextra);

          dispatch({ type: "ADD", payload: ItemIncresedNumberofItems[0] });

          const mergedArray = [
            ...filteringanyextra,
            ItemIncresedNumberofItems[0],
          ];

          localStorage.setItem("GamingcartItems", JSON.stringify(mergedArray));
        }, 500);
      } else {
        dispatch({ type: "ADD", payload: addItemToCart });

        const mergedArray = [...localStoragecurrentItems, addItemToCart];

        localStorage.setItem("GamingcartItems", JSON.stringify(mergedArray));
      }

      // if (checkforduplicatefilter) {
      //   setDuplicateItemDealWith(checkforduplicatefilter);
      // }
      // console.log(addItemToCart);
      // console.log("we are inside");

      // so we here getting the data from the local storage if they are there, and adding them with the current context so it says
      // up to date.
      // const ToLocalStorageitems = JSON.parse(
      //   localStorage.getItem("GamingcartItems")
      // );
    }
  }, [addItemToCart, changeValue]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://gaming-platform-backend-node-git-master-enstein01.vercel.app/api/items"
      );

      const item = await response.json();

      if (response.ok) {
        // dispatcho({ type: "FETCHED-ALL", payload: json });
        setallItems(item);
        setShowSortedFiltered(item);

        // console.log(item);
      }
    };

    fetchItems();
  }, [showCart]);

  // Dealing with the Filters and Sorting and pagination
  let sortedItems;
  let searchItemName;
  useEffect(() => {
    if (showOnlyLeagueofLegendsItems) {
      sortedItems = allItems.filter(function (item) {
        return item.type === "League of Legends";
      });

      setShowSortedFiltered(sortedItems);
    }
    if (showOldSchoolRuneScape) {
      sortedItems = allItems.filter(function (item) {
        return item.type === "Old School RuneScape";
      });

      setShowSortedFiltered(sortedItems);
    }
    if (showPubg) {
      sortedItems = allItems.filter(function (item) {
        return item.type === "Pubg";
      });

      setShowSortedFiltered(sortedItems);
    }
    if (showCyberpunk) {
      sortedItems = allItems.filter(function (item) {
        return item.type === "Cyberpunk";
      });

      setShowSortedFiltered(sortedItems);
    }
    if (showAllItems) {
      setShowSortedFiltered(allItems);
    }

    if (selectSortingValue) {
      if (selectSortingValue === "Highest price to Lowest") {
        const sortedData = [...allItems].sort((a, b) =>
          a.price < b.price ? 1 : -1
        );

        setShowSortedFiltered(sortedData);
        setSearchInput("");
        setSearchFound("");
      }

      if (selectSortingValue === "Lowest price to Highest") {
        const sortedData = [...allItems].sort((a, b) =>
          a.price > b.price ? 1 : -1
        );

        setShowSortedFiltered(sortedData);
        setSearchInput("");
        setSearchFound("");
      }

      if (selectSortingValue === "Sort back to Normal") {
        setShowSortedFiltered(allItems);
        setShowAllItems(true);

        setShowOnlyLeagueofLegendsItems(false);
        setShowOldSchoolRuneScape(false);
        setShowPubg(false);
        setShowCyberpunk(false);
        setselectSortingValue("");
        setSearchInput("");
        setSearchFound("");

        // setShowOnlyLeagueofLegendsItems(false);
        // setShowOldSchoolRuneScape(false);
        // setShowPubg(false);
        // setShowCyberpunk(false);
        // setselectSortingValue("");
        // setSearchInput("");
      }
      // if (selectSortingValue === "Sort back to normal") {
      //   setShowSortedFiltered(allItems);
      //   setSearchInput("");
      // }
    }
  }, [
    showOnlyLeagueofLegendsItems,
    showOldSchoolRuneScape,
    showPubg,
    showCyberpunk,
    showAllItems,
    selectSortingValue,
  ]);

  useEffect(() => {
    if (searchInput) {
      // console.log(searchInput);
      searchItemName = allItems.filter(function (item) {
        // console.log(typeof item.name);
        // console.log(typeof searchInput);

        return item.name.toLowerCase() === searchInput.toLowerCase();
      });

      // console.log(searchItemName);

      if (Object.keys(searchItemName).length > 0) {
        setShowAllItems(false);
        setShowSortedFiltered(searchItemName);
        setselectSortingValue("");
        setSearchFound("");
      }

      if (Object.keys(searchItemName).length === 0) {
        // console.log("none");
        setSearchFound("Not found");
      }
    }

    // if (searchInput) {

    //   filteredId = AllItems.filter((AllItems) => {
    //     return AllItems.name.toLowerCase() === searchInput.toLowerCase();
    //   });

    //   if (Object.keys(filteredId).length > 0) {
    //     // console.log("there is an item, item found");
    //     setSearchFound(filteredId[0]);
    //   }

    //   if (Object.keys(filteredId).length === 0) {
    //     // console.log("none");
    //     setSearchFound([]);
    //   }
    // }
  }, [searchInput]);

  // handle checking user

  // to check if there is a token to log in user automatically
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("Gaminguser")) &&
      Object.keys(JSON.parse(localStorage.getItem("Gaminguser"))).length !== 0

      // localStoragechecking !== undefined
      //  &&
      // Object.keys(localStoragechecking).length > 1
    ) {
      // console.log("there is user and local storage data");
      // SetTokenValue(JSON.parse(localStorage.getItem("Gaminguser")));

      dispatchUser({
        type: "LOGIN",
        payload: JSON.parse(localStorage.getItem("Gaminguser")),
      });

      // console.log(user);

      // get user name and address, get user data function
      const handleGetUserData = async () => {
        // e.preventDefault();

        const formData = new FormData();

        if (user) {
          formData.append("jwt", user.token);
        }

        // fetch request
        try {
          const datas = await axios.post(
            "https://gaming-platform-backend-node-git-master-enstein01.vercel.app/api/users/getndata/",
            formData,
            {
              withCredentials: true,
              headers: {
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                "Access-Control-Allow-Headers":
                  "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
              },
            }
          );

          // console.log(datas.data);

          if (datas.status === 200) {
            // console.log("data");
            SetUserdataNameAddress(datas.data);

            // setSuccessfulSignup(true);
            // setErrorSignup("");
            // setErrorLogin("");

            // setTimeout(() => {
            //   // setShowLogin(true);
            //   // setShowSignup(false);
            //   // setSuccessfulSignup(false);
            // }, 2000);
          }
        } catch (error) {
          // console.log("error");
          // if there is an error response
          // console.log(error);
          // if there is an error response
          // console.log(error.response.data);
          // setErrorSignup(error.response.data.error);
        }
      };

      handleGetUserData();
    } else {
      // console.log("there is empty local storage or none");

      let emptyarray = [];

      localStorage.setItem("Gaminguser", JSON.stringify(emptyarray));
      dispatchUser({ type: "LOGIN", payload: emptyarray });
    }
  }, [showCart]);

  useEffect(() => {
    // pending state to check if the user is clicking on stripe and paying or joking the system
    if (typeof window !== "undefined") {
      let pendingstate = false;
      localStorage.setItem("pendingstatev", JSON.stringify(pendingstate));
    }
  }, [showCart]);

  // getting the localstorage items
  let getLocalCartItems;
  if (typeof window !== "undefined") {
    getLocalCartItems = JSON.parse(localStorage.getItem("GamingcartItems"));
  }

  // placing the order to the backend , pay when recived order
  const HandlePlaceOrder = async () => {
    // fetch request and if ok the cookie will be removed

    if (!user && !UserdataNameAddress) {
      return setErrorToPlaceOrder(true);
    }

    if (!UserdataNameAddress) {
      return setErrorToPlaceOrder(true);
    }

    const orderItemsv = JSON.parse(localStorage.getItem("GamingcartItems"));

    let orderPriceTotalvalue = orderItemsv
      .map((item) => item.price * item.numberofitem)
      .reduce((a, b) => a + b, 0);
    // console.log(orderPriceTotalvalue); // priceTotal

    // items as they are , that will be the order and when fetching it, will display it as it is with number of items.
    // total price down there and we got it too.

    const submission = {
      OrderDetails: {
        orderProducts: [...orderItemsv],
        orderTotalValue: orderPriceTotalvalue,
      },

      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://gaming-platform-backend-node-git-master-enstein01.vercel.app/api/orders/cartorder",
        { submission },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if ((datas.data.status = 200)) {
        setSuccessfulOrder(true);

        // localStorage.removeItem("GamingcartItems");

        let emptyarray = [];

        // if (!localStorage.getItem("GamingcartItems")) {
        localStorage.setItem("GamingcartItems", JSON.stringify(emptyarray));
        // }

        dispatch({ type: "SET_ITEM", payload: emptyarray });

        // hide button to avoid duplicate orders
        // setHideOrderButton(true);

        // console.log("order placed and redirecting");
        // setTimeout(() => {
        //   // navTo("/");
        //   // redirecting to order was succesfully placed thank you
        //   // redirect to homepage option.
        // }, 500);

        // console.log("redirecting");

        setTimeout(() => {
          // navTo("/");
          push("https://gaming-platform-frontend-next.vercel.app/successorder");

          // redirecting to order was succesfully placed thank you
          // redirect to homepage option.
        }, 1500);
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorSignup(error.response.data.error);
    }
  };

  // Stripe payment Link

  const HandleGetPaymentLink = async () => {
    // fetch request and if ok the cookie will be removed

    if (!user && !UserdataNameAddress) {
      return setErrorToPlaceOrder(true);
    }

    if (!UserdataNameAddress) {
      return setErrorToPlaceOrder(true);
    }

    const orderItemsv = JSON.parse(localStorage.getItem("GamingcartItems"));

    let orderTotalValue = getLocalCartItems
      .map((itemss) => itemss.price * itemss.numberofitem)
      .reduce((a, b) => a + b, 0);

    let OrderDetails = {
      orderProducts: [...orderItemsv],
      orderTotalValue: orderTotalValue,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "api/checkout_sessions",
        // { OrderDetails },
        { OrderDetails },

        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if ((datas.data.status = 200)) {
        // console.log(datas.data);

        let pendingstate = true;
        localStorage.setItem(
          "pendingstatev",
          JSON.stringify({ OrderDetails, pendingstate })
          // JSON.stringify({ orderTotalValue, pendingstate })
        );

        // console.log(datas.data.sessionURL);

        window.location = datas.data.sessionURL;

        // setTimeout(() => {
        //   // navTo("/");
        //   push("/successorder");

        //   // redirecting to order was succesfully placed thank you
        //   // redirect to homepage option.
        // }, 2000);
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorSignup(error.response.data.error);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    setShowSubscribedTrue(true);

    setTimeout(() => {
      setShowSubscribedTrue(false);
    }, 2000);

    return;
  };

  // fetch request and if ok the cookie will be removed
  let filterstepone;
  let filtersteptwo;

  // increasing number of items + and decreasing - number of items
  let itemQuantityOneChecking;
  let addingFilterstepone;
  let addingFiltersteptwo;
  let newFilteredTargetItem;
  let filteredTargetItem;

  return (
    <div className={styles.ServiceComponent}>
      <div className={styles.ServiceFirstPart}>
        <div className={styles.FirstpartText}>
          <div className={styles.FirstpartTextdirection}>
            <h3>Home</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <div>Services</div>
          </div>

          <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>

        <div
          // style={{
          //   backgroundColor: showServices === true ? "green" : "white",
          // }}
          className={styles.alldirectionmain}
        >
          <button
            style={{
              backgroundColor: showServices === true ? "green" : "",
            }}
            className={styles.alldirectionmainEach}
            onClick={() => {
              setshowCart(false);
              setshowServices(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <div>Services</div>
          </button>
          <button
            style={{
              backgroundColor: showCart === true ? "green" : "",
            }}
            className={styles.alldirectionmainEach}
            onClick={() => {
              if (Object.keys(getLocalCartItems).length > 0) {
                setshowServices(false);
                setshowCart(true);
              }
              if (Object.keys(getLocalCartItems).length === 0) {
                setShowNoItemAddedError(true);

                setTimeout(() => {
                  setShowNoItemAddedError(false);
                }, 1500);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <div>Cart</div>
            {getLocalCartItems && (
              <div className={styles.cartNumber}>
                {Object.keys(getLocalCartItems).length > 0
                  ? Object.keys(getLocalCartItems).length
                  : ""}
              </div>
            )}
          </button>
        </div>

        {ShowNoItemAddedError && (
          <h4 className={styles.cartIsEmptyNote}>
            Cart is Empty, Please add first to continue
          </h4>
        )}

        {showServices && (
          <div>
            <div className={styles.FirstpartImageComponent}>
              <Image
                alt="image"
                className={styles.FirstpartImage}
                src={require(`./../../../public/services/searchicon.svg`)}
              ></Image>
              <input
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  // setNotFound(false);
                }}
                type="text"
              ></input>

              {SearchFound && <div>{SearchFound}</div>}
            </div>
          </div>
        )}
      </div>

      {showServices && (
        <div>
          {" "}
          <div className={styles.Sorting}>
            <select
              className={styles.SortingSelect}
              // id="productType"

              // className="form-drop-down-style"
              // type="productType"
              // name="productType"
              value={selectSortingValue}
              onChange={(e) => setselectSortingValue(e.target.value)}
            >
              <option>SORT</option>
              <option>Highest price to Lowest</option>
              <option>Lowest price to Highest</option>
              <option>Sort back to Normal</option>
            </select>
          </div>
          <div className={styles.FiltersGame}>
            <div className={styles.organicButton}>
              <button
                style={{
                  backgroundColor: showAllItems === true ? "green" : "white",
                }}
                onClick={() => {
                  setShowAllItems(true);
                  setShowOnlyLeagueofLegendsItems(false);
                  setShowOldSchoolRuneScape(false);
                  setShowPubg(false);
                  setShowCyberpunk(false);
                  setselectSortingValue("");
                  setSearchInput("");
                  setSearchFound("");
                }}
              ></button>
              <p> Show All</p>
            </div>

            <div className={styles.organicButton}>
              <button
                style={{
                  backgroundColor:
                    showOnlyLeagueofLegendsItems === true ? "green" : "white",
                }}
                onClick={() => {
                  setShowOnlyLeagueofLegendsItems(true);

                  setShowAllItems(false);

                  setShowOldSchoolRuneScape(false);
                  setShowPubg(false);
                  setShowCyberpunk(false);
                  setselectSortingValue("");
                  setSearchInput("");
                  setSearchFound("");
                }}
              ></button>
              <p> League of Legends</p>
            </div>

            <div className={styles.organicButton}>
              <button
                style={{
                  backgroundColor:
                    showOldSchoolRuneScape === true ? "green" : "white",
                }}
                onClick={() => {
                  setShowOldSchoolRuneScape(true);

                  setShowAllItems(false);
                  setShowOnlyLeagueofLegendsItems(false);

                  setShowPubg(false);
                  setShowCyberpunk(false);
                  setselectSortingValue("");
                  setSearchInput("");
                  setSearchFound("");
                }}
              ></button>
              <p> Old School RuneScape</p>
            </div>

            <div className={styles.organicButton}>
              <button
                style={{
                  backgroundColor: showPubg === true ? "green" : "white",
                }}
                onClick={() => {
                  setShowPubg(true);

                  setShowAllItems(false);
                  setShowOnlyLeagueofLegendsItems(false);
                  setShowOldSchoolRuneScape(false);

                  setShowCyberpunk(false);
                  setselectSortingValue("");
                  setSearchInput("");
                  setSearchFound("");
                }}
              ></button>
              <p> Pubg</p>
            </div>

            <div className={styles.organicButton}>
              <button
                style={{
                  backgroundColor: showCyberpunk === true ? "green" : "white",
                }}
                onClick={() => {
                  setShowCyberpunk(true);

                  setShowAllItems(false);
                  setShowOnlyLeagueofLegendsItems(false);
                  setShowOldSchoolRuneScape(false);
                  setShowPubg(false);
                  setselectSortingValue("");
                  setSearchInput("");
                  setSearchFound("");
                }}
              ></button>
              <p>Cyberpunk</p>
            </div>
          </div>
          <div className={styles.SecondpartComponent}>
            {selectedItemForDetail && (
              <div className={styles.SecondpartDetailsPart}>
                <Image
                  width={600}
                  height={600}
                  alt="image"
                  className={styles.SecondpartLeftImage}
                  src={require(`./../../../public/services/${selectedItemForDetail.name}.jpg`)}

                  // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${selectedItemForDetail.name}.png`}
                ></Image>
                <div className={styles.SecondpartDetailsPartButton}>
                  <button
                    onClick={() => {
                      // const numberofitemforvalue = JSON.parse(
                      //   localStorage.getItem("GamingcartItems")
                      // );

                      const numberofitemforvalue = JSON.parse(
                        localStorage.getItem("GamingcartItems")
                      );

                      setaddItemToCart(selectedItemForDetail);
                      setChangeValue(changeValue + 1);

                      // dispatch({ type: "ADD", payload: itemsFetched });
                    }}
                  >
                    Add to cart
                  </button>
                  <div>.2h eta</div>
                </div>
                <h2>{selectedItemForDetail.name}</h2>
                <h3>
                  We deliver in less than 2 hour, Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries,
                </h3>
                <h3>
                  {selectedItemForDetail.name} is simply dummy text of the
                  printing and typesetting industry.
                </h3>
              </div>
            )}
            {/* allItems */}
            {/* {!selectedItemForDetail && <div>Loading</div>} */}

            {!selectedItemForDetail && allItems[0] && (
              <div className={styles.SecondpartDetailsPart}>
                <Image
                  width={600}
                  height={600}
                  alt="image"
                  className={styles.SecondpartLeftImage}
                  // src={require(`./../../../public/services/${allItems[0].image}.jpg`)}

                  src={require(`./../../../public/services/${allItems[0].name}.jpg`)}

                  // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${allItems[0].name}.png`}
                ></Image>
                <div className={styles.SecondpartDetailsPartButton}>
                  <button
                    onClick={() => {
                      // const numberofitemforvalue = JSON.parse(
                      //   localStorage.getItem("GamingcartItems")
                      // );

                      const numberofitemforvalue = JSON.parse(
                        localStorage.getItem("GamingcartItems")
                      );

                      setaddItemToCart(allItems[0]);
                      setChangeValue(changeValue + 1);

                      // dispatch({ type: "ADD", payload: itemsFetched });
                    }}
                  >
                    Add to cart
                  </button>
                  <div>.2h eta</div>
                </div>
                <h2>{allItems[0].name}</h2>
                <h3>
                  We deliver in less than 2 hour, Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries,
                </h3>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
              </div>
            )}

            <div className={styles.SecondpartDetailsRightComponent}>
              {showSortedFiltered.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.SecondpartDetailsRightPart}
                  >
                    <Image
                      width={300}
                      height={300}
                      alt="image"
                      className={styles.SecondpartRightEachServiceImage}
                      // src={require(`./../../../public/services/${item.image}.jpg`)}

                      src={require(`./../../../public/services/${item.name}.jpg`)}

                      // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                    ></Image>
                    <div className={styles.SecondpartDetailsRightPartComponent}>
                      <div className={styles.SecondpartDetailsRightPartTitle}>
                        <button
                          onClick={() => {
                            // const numberofitemforvalue = JSON.parse(
                            //   localStorage.getItem("GamingcartItems")
                            // );

                            const numberofitemforvalue = JSON.parse(
                              localStorage.getItem("GamingcartItems")
                            );

                            setaddItemToCart(item);
                            setChangeValue(changeValue + 1);

                            // dispatch({ type: "ADD", payload: itemsFetched });
                          }}
                        >
                          Add to cart
                        </button>
                        <button
                          onClick={() => {
                            setselectedItemForDetail(item);
                          }}
                        >
                          Check details
                        </button>
                        <div>.2h eta</div>
                      </div>
                      <h2>{item.name} </h2>
                      <h2>${item.price} </h2>
                    </div>
                  </div>
                );
              })}

              <div className={styles.Secondpartpagination}>
                <button>1</button>
                <button>2</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCart && getLocalCartItems && (
        <div className={styles.CartComponent}>
          <div className={styles.SecondpartDetailsRightComponent}>
            {getLocalCartItems.map((item, index) => {
              return (
                <div key={index} className={styles.SecondpartDetailsRightPart}>
                  <Image
                    width={300}
                    height={300}
                    alt="image"
                    className={styles.SecondpartRightEachServiceImage}
                    src={require(`./../../../public/services/${item.name}.jpg`)}

                    // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                  ></Image>
                  <div className={styles.CartItemEachAllDetail}>
                    <div>
                      <h2>Service: {item.name} </h2>
                      <h2>Price: ${item.price} </h2>
                      <h2>Quantity: {item.numberofitem} </h2>
                      <h2>Type: {item.type} </h2>
                    </div>
                    <div className={styles.CartItemEachButtons}>
                      <button
                        onClick={() => {
                          addingFilterstepone = JSON.parse(
                            localStorage.getItem("GamingcartItems")
                          );
                          addingFiltersteptwo = addingFilterstepone.filter(
                            (newCart) => newCart._id !== item._id
                          );

                          filteredTargetItem = addingFilterstepone.filter(
                            (newCart) => newCart._id === item._id
                          );

                          newFilteredTargetItem = filteredTargetItem.map(
                            (item) => {
                              item.numberofitem = item.numberofitem - 1;
                              return item;
                            }
                          );

                          [itemQuantityOneChecking] = [
                            ...newFilteredTargetItem,
                          ];

                          //    console.log(itemQuantityOneChecking.numberofitem);

                          if (itemQuantityOneChecking.numberofitem >= 1) {
                            const mergedArray2 = [
                              ...addingFiltersteptwo,
                              ...newFilteredTargetItem,
                            ];
                            //         console.log(mergedArray2);

                            localStorage.setItem(
                              "GamingcartItems",
                              JSON.stringify(mergedArray2)
                            );

                            dispatch({
                              type: "SET_ITEM",
                              payload: mergedArray2,
                            });
                          }

                          if (itemQuantityOneChecking.numberofitem < 1) {
                            //     console.log("we can't subtract more");

                            filterstepone = JSON.parse(
                              localStorage.getItem("GamingcartItems")
                            );

                            //     console.log(filterstepone);
                            filtersteptwo = filterstepone.filter(
                              (newCart) => newCart._id !== item._id
                            );
                            localStorage.setItem(
                              "GamingcartItems",
                              JSON.stringify(filtersteptwo)
                            );
                            // setMyCategorya([...filtersteptwo]);

                            dispatch({
                              type: "SET_ITEM",
                              payload: filtersteptwo,
                            });
                            // console.log(items);
                          }
                          // localStorage.setItem(
                          //   "GamingcartItems",
                          //   JSON.stringify(filtersteptwo)
                          // );
                          // setMyCategorya([...filtersteptwo]);

                          // console.log(items);
                          //   localStorage.setItem(
                          //     "GamingcartItems",
                          //     JSON.stringify(addingFiltersteptwo)
                          //   );
                          //   // setMyCategorya([...filtersteptwo]);

                          //   dispatch({ type: "SET_ITEM", payload: addingFiltersteptwo });
                          //   // console.log(items);
                        }}
                      >
                        -1
                      </button>
                      <button
                        onClick={() => {
                          filterstepone = JSON.parse(
                            localStorage.getItem("GamingcartItems")
                          );
                          filtersteptwo = filterstepone.filter(
                            (newCart) => newCart._id !== item._id
                          );
                          localStorage.setItem(
                            "GamingcartItems",
                            JSON.stringify(filtersteptwo)
                          );
                          // setMyCategorya([...filtersteptwo]);

                          dispatch({
                            type: "SET_ITEM",
                            payload: filtersteptwo,
                          });
                        }}
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => {
                          addingFilterstepone = JSON.parse(
                            localStorage.getItem("GamingcartItems")
                          );
                          addingFiltersteptwo = addingFilterstepone.filter(
                            (newCart) => newCart._id !== item._id
                          );

                          filteredTargetItem = addingFilterstepone.filter(
                            (newCart) => newCart._id === item._id
                          );

                          newFilteredTargetItem = filteredTargetItem.map(
                            (item) => {
                              item.numberofitem = item.numberofitem + 1;
                              return item;
                            }
                          );

                          // localStorage.setItem(
                          //   "GamingcartItems",
                          //   JSON.stringify(filtersteptwo)
                          // );
                          // setMyCategorya([...filtersteptwo]);

                          const mergedArray2 = [
                            ...addingFiltersteptwo,
                            ...newFilteredTargetItem,
                          ];
                          //    console.log(mergedArray2);

                          localStorage.setItem(
                            "GamingcartItems",
                            JSON.stringify(mergedArray2)
                          );

                          dispatch({ type: "SET_ITEM", payload: mergedArray2 });
                          // console.log(items);
                          //   localStorage.setItem(
                          //     "GamingcartItems",
                          //     JSON.stringify(addingFiltersteptwo)
                          //   );
                          //   // setMyCategorya([...filtersteptwo]);

                          //   dispatch({ type: "SET_ITEM", payload: addingFiltersteptwo });
                          //   // console.log(items);
                        }}

                        //   const numberofitemforvalue = JSON.parse(
                        //     localStorage.getItem("GamingcartItems")
                        //   );

                        //   setaddItemToCart(item);
                        //   setChangeValue(numberofitemforvalue.length + 1);
                        // }}
                      >
                        +1
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.CartAddressandPayment}>
            <div>
              <h3>Order Price:</h3>
              <h4>
                Order total value: $
                {getLocalCartItems
                  .map((itemss) => itemss.price * itemss.numberofitem)
                  .reduce((a, b) => a + b, 0)}
              </h4>
            </div>

            {user && UserdataNameAddress && (
              <div>
                <h2>Location Details:</h2>
                <div>Email: {UserdataNameAddress.email} </div>
                <div>Address: {UserdataNameAddress.address}</div>
                <div>Mobile: 0{UserdataNameAddress.mobile}</div>

                <div className={styles.deliverydetaildirecttologin}>
                  <div>You can change edit Delivery information in</div>
                  <Link href="/login">Login page</Link>
                </div>
              </div>
            )}

            {user && !UserdataNameAddress && (
              <div className={styles.deliverydetaildirecttologinNotLogged}>
                <div>You need to log in to continue the purchase </div>
                <Link href="/login">Login page</Link>
              </div>
            )}

            <div>
              <h2>Payment Options:</h2>
              <div>
                {" "}
                <div>
                  Payment method 1: ORDER NOW and pay when Recieved with cash
                </div>
                <button onClick={HandlePlaceOrder}>place order</button>
              </div>

              <div>
                <div>Payment method 2: Visa - Stripe payment</div>

                <button
                  className={styles.visapaymentstyles}
                  onClick={() => {
                    HandleGetPaymentLink();
                  }}
                >
                  <div>Pay Visa-MasterCard </div>
                  <Image
                    alt="image"
                    src={require(`./../../../public/Homepage/paymentoptions3.jpg`)}
                  ></Image>
                </button>
              </div>
            </div>

            {successfulOrder && (
              <div className={styles.successfulordernotifcation}>
                Order was placed successfully, redirecting
              </div>
            )}

            {errorToPlaceOrder && (
              <div className={styles.Errornotification}>
                Please Log In or Sign Up First
              </div>
            )}
          </div>
        </div>
      )}

      {/* section 6 */}

      {/* <div className={styles.sectionsixthComponent}>
        <div className={styles.sectionsixthTextContent}>
          <h1>Lorem Ipsum</h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
        </div>

        <div className={styles.sectionsixthTextsubscribe}>
          <div className={styles.sectionsixthTextsubscribefirst}>
            <h1>Stay in the loop</h1>
            <h2>
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{" "}
            </h2>
          </div>
          <div>
            <form
              className={styles.sectionsixthTextsubscribesecond}
              onSubmit={handleSubscribe}
              // action="/send-data-here"
              // method="post"
            >
              <input
                placeholder="Enter email address"
                required
                type="email"
                name="emailsub"
                minlength="5"
                maxlength="50"
              ></input>
              <button
                type="submit"

                // onClick={() => {
                //   setShowSubscribedTrue(true);

                //   setTimeout(() => {
                //     setShowSubscribedTrue(false);
                //   }, 2000);
                // }}
              >
                Continue
              </button>
            </form>

            {showSubscribedTrue && (
              <div className={styles.subscribeemailStyle}>Subscribed</div>
            )}
          </div>
        </div>
      </div> */}

      <SubscribeEmail />

      <Footer />
    </div>
  );
};

export default BlogPage;
