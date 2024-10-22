export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isAdmin = auth?.user?.role === "admin";
      const isOnDashboard = request.nextUrl.pathname.startsWith("/admin");
      if (isOnDashboard) {
        if (isLoggedIn && isAdmin) return true;
        return false;
      } else if (isLoggedIn && isAdmin) {
        return Response.redirect(new URL("/admin", request.nextUrl));
      }
      return true;
    },
  },
};
