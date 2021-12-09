<template>
    <header class="header header-10 header-intro-clearance">
        <div class="header-top">
            <div class="container">
                <div class="header-left">
                    <router-link to="tel:+8801798037068"
                        ><i class="icon-phone"></i>Call: +8801798037068
                    </router-link>
                </div>
                <!-- End .header-left -->

                <div class="header-right">
                    <ul class="top-menu">
                        <li>
                            <router-link to="#">Links</router-link>
                            <ul>
                                <li>
                                    <div class="header-dropdown">
                                        <router-link to="#">USD</router-link>
                                        <div class="header-menu">
                                            <ul>
                                                <li>
                                                    <router-link to="#"
                                                        >Tk</router-link
                                                    >
                                                </li>
                                                <li>
                                                    <router-link to="#"
                                                        >Usd</router-link
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .header-menu -->
                                    </div>
                                    <!-- End .header-dropdown -->
                                </li>
                                <LanguegeSwitcher />
                                <li class="login" v-if="!user.id">
                                    <a href="#signin-modal" data-toggle="modal">
                                        {{ $t("auth.signin") }} /
                                        {{ $t("auth.signup") }}
                                    </a>
                                </li>
                                <li class="sf-ul" v-else>
                                    <div class="header-dropdown">
                                        <a href="#"> {{ user.name }} </a>
                                        <div class="header-menu">
                                            <ul>
                                                <li>
                                                    <router-link to="/profile">
                                                        Profile
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/orders">
                                                        Orders
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <a
                                                        @click.prevent="
                                                            doLogout
                                                        "
                                                    >
                                                        Log Out
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- End .top-menu -->
                </div>
                <!-- End .header-right -->
            </div>
            <!-- End .container -->
        </div>
        <!-- End .header-top -->

        <div class="header-middle">
            <div class="container">
                <div class="header-left">
                    <button class="mobile-menu-toggler">
                        <span class="sr-only">Toggle mobile menu</span>
                        <i class="icon-bars"></i>
                    </button>

                    <router-link to="/" class="">
                        <img
                            src="/storage/site/logo.png"
                            alt="Site Logo"
                            style="max-width: 150px;"
                        />
                    </router-link>
                </div>
                <!-- End .header-left -->

                <div class="header-center">
                    <div
                        class="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block"
                    >
                        <router-link to="#" class="search-toggle" role="button"
                            ><i class="icon-search"></i
                        ></router-link>
                        <form action="#" method="get">
                            <div
                                class="header-search-wrapper search-wrapper-wide"
                            >
                                <div class="select-custom">
                                    <select id="cat" name="cat">
                                        <option value=""
                                            >All Departments</option
                                        >
                                        <option value="1">Fashion</option>
                                        <option value="2" disabled
                                            >- Women</option
                                        >
                                    </select>
                                </div>
                                <!-- End .select-custom -->
                                <label for="q" class="sr-only">Search</label>
                                <input
                                    type="search"
                                    class="form-control"
                                    name="q"
                                    id="q"
                                    placeholder="Search product ..."
                                    required
                                />
                                <button class="btn btn-primary" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                            <!-- End .header-search-wrapper -->
                        </form>
                    </div>
                    <!-- End .header-search -->
                </div>

                <div class="header-right">
                    <div class="header-dropdown-link">
                        <div class="dropdown compare-dropdown">
                            <router-link
                                to="#"
                                class="dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-display="static"
                                title="Compare Products"
                                aria-label="Compare Products"
                            >
                                <i class="icon-random"></i>
                                <span class="compare-txt">{{
                                    $t("compare")
                                }}</span>
                            </router-link>

                            <div class="dropdown-menu dropdown-menu-right">
                                <ul class="compare-products">
                                    <li
                                        class="compare-product"
                                        v-for="compare in compareData.compares"
                                        :key="compare.rowId"
                                    >
                                        <a
                                            href="#"
                                            @click="
                                                removeCompareItem(compare.rowId)
                                            "
                                            class="btn-remove"
                                            title="Remove Product"
                                            ><i class="icon-close"></i
                                        ></a>
                                        <h4
                                            class="compare-product-title d-flex"
                                        >
                                            <img
                                                :src="
                                                    compare.options[0].image
                                                        ? `${compare.options[0].image}`
                                                        : `/storage/products/default.png`
                                                "
                                                :alt="compare.name"
                                                class="w-25"
                                            />
                                            <span class="pt-1 pl-2">
                                                {{ compare.name }}
                                            </span>
                                        </h4>
                                    </li>
                                </ul>

                                <div class="compare-actions">
                                    <a
                                        href="#"
                                        @click="clearAllCompareItem"
                                        class="action-link"
                                        >Clear All</a
                                    >
                                    <router-link
                                        to="/compare"
                                        class="btn btn-outline-primary-2"
                                        ><span>{{ $t("compare") }}</span
                                        ><i class="icon-long-arrow-right"></i
                                    ></router-link>
                                </div>
                            </div>
                            <!-- End .dropdown-menu -->
                        </div>
                        <!-- End .compare-dropdown -->

                        <router-link to="/wishlists" class="wishlist-link">
                            <i class="icon-heart-o"></i>
                            <span class="wishlist-count">{{
                                wishlistData.count ? wishlistData.count : 0
                            }}</span>
                            <span class="wishlist-txt">{{
                                $t("wishlist")
                            }}</span>
                        </router-link>

                        <div class="dropdown cart-dropdown">
                            <router-link
                                to="#"
                                class="dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-display="static"
                            >
                                <i class="icon-shopping-cart"></i>
                                <span class="cart-count">
                                    {{
                                        cartData.count ? cartData.count : 0
                                    }}</span
                                >
                                <span class="cart-txt"> {{ $t("cart") }} </span>
                            </router-link>

                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-cart-products">
                                    <div
                                        class="product"
                                        v-for="cart in cartData.carts"
                                        :key="cart.rowId"
                                    >
                                        <div class="product-cart-details">
                                            <h4 class="product-title">
                                                {{ cart.name }}
                                            </h4>

                                            <span class="cart-product-info">
                                                <span class="cart-product-qty">
                                                    {{ cart.qty }}
                                                </span>
                                                x $ {{ cart.price }} =
                                                {{ cart.subtotal }}
                                            </span>
                                        </div>

                                        <figure class="product-image-container">
                                            <a href="#" class="product-image">
                                                <img
                                                    :src="
                                                        cart.options[0].image
                                                            ? `${cart.options[0].image}`
                                                            : `/storage/products/default.png`
                                                    "
                                                    :alt="cart.name"
                                                />
                                            </a>
                                        </figure>
                                        <a
                                            href="#"
                                            @click="removeCartItem(cart.rowId)"
                                            class="btn-remove"
                                            title="Remove Product"
                                            ><i class="icon-close"></i
                                        ></a>
                                    </div>
                                </div>

                                <div class="dropdown-cart-total">
                                    <span>Total</span>

                                    <span class="cart-total-price"
                                        >$ {{ cartData.total }}
                                    </span>
                                </div>

                                <div class="dropdown-cart-action">
                                    <router-link
                                        to="/cart"
                                        class="btn btn-primary"
                                        >View Cart</router-link
                                    >
                                    <router-link
                                        to="/checkout"
                                        class="btn btn-outline-primary-2"
                                        ><span>Checkout</span
                                        ><i class="icon-long-arrow-right"></i
                                    ></router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End .cart-dropdown -->
                    </div>
                </div>
                <!-- End .header-right -->
            </div>
            <!-- End .container -->
        </div>
        <!-- End .header-middle -->

        <AuthModal />
        <StickyHeader />
    </header>
    <!-- End .header -->
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
    components: {
        LanguegeSwitcher: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/LanguegeSwitcher" */ "./LanguegeSwitcher"
            ),
        StickyHeader: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/StickyHeader" */ "./StickyHeader"
            ),
        AuthModal: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/AuthModal" */ "./Login"
            )
        //  CategoriesSubcategories: () => import(/* webpackChunkName: "Chunks/Site/Components/CategoriesSubcategories" */ '../components/Category/CategoriesSubcategories')
    },
    computed: {
        ...mapState("authStoreIndex", ["user"]),
        ...mapState("cartStoreIndex", ["cartData"]),
        ...mapState("wishlistsStoreIndex", ["wishlistData"]),
        ...mapState("compareStoreIndex", ["compareData"]),
        ...mapGetters("cartStoreIndex", ["cartsArray"]),
        ...mapState("categoriesStoreIndex", ["nested_categories"])
    },
    methods: {
        ...mapActions("authStoreIndex", ["doLogout"]),
        ...mapActions("categoriesStoreIndex", ["getCategoriesSubcategories"]),
        ...mapActions("cartStoreIndex", ["getCarts", "removeCartItem"]),
        ...mapActions("compareStoreIndex", [
            "getCompares",
            "removeCompareItem",
            "clearAllCompareItem"
        ])
    },
    created() {
        if (this.nested_categories.length < 1) {
            this.getCategoriesSubcategories();
        }
        if (Object.keys(this.cartData.carts).length < 1) {
            this.getCarts();
        }
        if (Object.keys(this.compareData.compares).length < 1) {
            this.getCompares();
        }
    }
};
</script>
