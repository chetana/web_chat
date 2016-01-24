/**
 * Created by Patate on 24/01/2016.
 */
<script>
    // models
    var viewModel = kendo.observable({
    foo: "World!",

    init: function() {
    console.log("view init", this.foo);
},

    show: function() {
    console.log("view show", this.foo);
},

    buttonClick: function() {
    alert("button clicked");
},

    goToView2: function(e) {
    router.navigate("/detail");
    e.preventDefault();
}
});


    // views, layouts
    var layout = new kendo.Layout("<header>Header</header><section id='content'></section><footer>Footer</footer>");

    var index = new kendo.View("index", { model: viewModel, init: viewModel.init.bind(viewModel), show: viewModel.show.bind(viewModel) });

    var detail = new kendo.View("<span>Detail - press your browser back button to navigate back.</span>");


    // routing
    var router = new kendo.Router();

    router.bind("init", function() {
    layout.render($("#app"));
});

    router.route("/", function() {
    layout.showIn("#content", index);
});

    router.route("/detail", function() {
    layout.showIn("#content", detail);
});

    $(function() {
    router.start();
});

</script>