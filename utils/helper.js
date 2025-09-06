// ---------------nav items-----------------

const navItems = [
  {
    name: "Home",
    path: "/",
    requiresAuth: false, // available for everyone
  },
  {
    name: "Property",
    path: "/property",
    requiresAuth: false, // available for everyone
  },
  {
    name: "Add Property",
    path: "/property/add",
    requiresAuth: true, // only for logged-in users
  },
];

export { navItems };
