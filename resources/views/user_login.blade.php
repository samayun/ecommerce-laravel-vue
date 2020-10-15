@extends('layouts.public')

@section('content')
<section class="pages login-page section-padding">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="main-input padding60">
                    <div class="log-title">
                        <h3><strong>Registered Customers</strong></h3>
                    </div>
                    <div class="login-text">
                        <div class="custom-input">
                            <p>If you have an account with us, Please log in!</p>
                            <form action="mail.php" method="post">
                                <input type="text" name="email" placeholder="Email">
                                <input type="password" name="password" placeholder="Password">
                                <a class="forget" href="#">Forget your password?</a>
                                <div class="submit-text">
                                    <a href="my-account.html">login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="main-input padding60 new-customer">
                    <div class="log-title">
                        <h3><strong>new customers</strong></h3>
                    </div>
                    <div class="custom-input">
                        <form action="mail.php" method="post">
                            <input type="text" name="name" placeholder="Name here..">
                            <input type="text" name="email" placeholder="Email Address..">
                            <input type="text" name="number" placeholder="Phone Number..">
                            <input type="text" name="address" placeholder="Password">
                            <input type="password" name="password" placeholder="Confirm Password">
                            <label class="first-child">
                                <input type="radio" name="rememberme" value="forever">
                                Sign up for our newsletter!
                            </label>
                            <div class="submit-text coupon">
                                <a href="my-account.html">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
