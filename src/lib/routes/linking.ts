const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: {
        path: "",
        screens: {
          Services: "",
          Foodies: {
            path: "foodies",
            screens: {
              FoodiesMain: "",
              AllOrders: {
                path: "orders/all-orders",
                screens: {
                  AllOrdersMain: "",
                },
              },
              AssignedOrders: {
                path: "orders/assigned-orders",
                screens: {
                  AssignedOrdersMain: "",
                },
              },
            },
          },
        },
        Auth: {
          path: "/auth",
          screens: {
            Login: {
              path: "/login",
            },
          },
        },
      },
    },
  },
};

export default linking;
