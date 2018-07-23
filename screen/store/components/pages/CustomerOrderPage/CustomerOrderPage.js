storeComps.CustomerOrderPage = {
  name: "customerorder-page",
  data() {
    return {
      ordersList:[],
      orderList:{},
      axiosConfig: {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "api_key":this.$root.apiKey,
          "moquiSessionToken":this.$root.moquiSessionToken
        }
      }
    };
  },
  methods: {
    getCustomerOrderById() {
      CustomerService.getCustomerOrderById(this.$route.params.orderId,this.axiosConfig).then(function (data) {
        this.orderList = data;
      }.bind(this));
    },
    formatDate(date) {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      var date = new Date(date);
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ', ' + year;
    }
  },
  components: { navbar: storeComps.NavbarTemplate, "footer-page": storeComps.FooterPageTemplate },
  mounted() { this.getCustomerOrderById(); }
};
storeComps.CustomerOrderPageTemplate = getPlaceholderRoute("orderDetailTemplate", "CustomerOrderPage");
