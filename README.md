# Flagwall

Little Chrome extension to flag text hyperlinks to well known paywall domains.

## Why?

For myself, because I hate following a link and then being hit by a paywall.
Rather than try to block of subvert these paywalls, I'd rather just boycott
those sites entirely. This extension flags hyperlinks by decorating them
with a dotted red underline. The user then has the option of ignoring them.

## How does it work?

Every web page you visit is scanned after it is loaded. It adds a CSS class to every matching hyperlink. It also listens for changes to the DOM to catch dynamically
generated content. The extension can be enabled/disabled globally.

## Domains

Any URL with a host part that ends in one of the following will be flagged.

- adelaidenow.com.au
- theaustralian.com.au
- bostonglobe.com
- bostonherald.com
- couriermail.com.au
- dailytelegraph.com.au
- fijitimes.com
- ft.com
- geelongadvertiser.com.au
- theglobeandmail.com
- heraldsun.com.au
- chron.com
- irishtimes.com
- latimes.com
- technologyreview.com
- nbr.co.nz
- nationalpost.com
- nytimes.com
- nnsl.com
- ntnews.com.au
- ocregister.com
- scientificamerican.com
- thestar.com
- thetimes.co.uk
- volkskrant.nl
- wsj.com