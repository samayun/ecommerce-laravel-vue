<template>
<div class="mobile-footer">
        <div class="mobile-footer-inner">
            <div class="mobile-block block-menu-main">
                <a class="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                    <span class="fa fa-bars"></span>
                    <span class="text">Menu</span>
                </a>
            </div>

            <div class="mobile-block block-minicart">
                <a class="link-to-cart" href="#">
                    <span class="fa fa-shopping-bag" aria-hidden="true"></span>
                    <span class="text">Cart</span>
                </a>
            </div>
            <div class="mobile-block block-global">
                <a class="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="javascript:void(0)">
                    <span class="fa fa-globe"></span>
                    <span class="text">Global</span>
                </a>
            </div>
        </div>
    </div>
</template>
<style>

.mobile-footer{
    display: none;
    background-color: #ededed;
    padding: 5px 0 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}
.mobile-footer .mobile-footer-inner{
    display: table;
    width: 100%;
    margin: 0;
}
.mobile-footer .mobile-footer-inner>div{
    display: table-cell;
    text-align: center;
}
.mobile-footer .mobile-block>a{
    display: block;
    color: #333333;
    padding: 5px;
    font-size: 0;
    line-height: 0;
}
.mobile-footer .mobile-block>a .text{
    font-size: 13px;
    line-height: 1;
    display: block;
    font-weight: 600;
}
.mobile-footer .mobile-block>a>.fa{
    display: block;
    font-size: 15px;
    margin-bottom: 2px;
}
@media ( max-width: 991px){
 .mobile-footer{
    display: block;
  }
}

</style>


