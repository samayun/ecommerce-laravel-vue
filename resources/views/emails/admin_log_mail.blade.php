@component('mail::message')
#  An Admin Logged In

An admin   named  {{ $name }}. just now logged in : his email is {{ $email }} .
Now authorize if it can be SPAM :smile:

@component('mail::button', ['url' => $url ?? '/admin' ])
    Authorize
@endcomponent

Thanks,
{{ config('app.name') }}
@endcomponent
