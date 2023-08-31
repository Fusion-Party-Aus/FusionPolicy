Presentation Categories
    Portfolios
    Capaigns (slogans)
    Problems/Issues (is maybe just topics?)
        Separate model with which a policy can be tagged?
    Values
    Principles

Website layout
    Featured categories/portfolios
    Summary page of all portfolios (like SP grid)

Portfolios
Portfolio Summaries

Objectives
    Cascading presentation layers
    Talking points for particular policy areas

Individual Freedoms
Advancement
Deep Ecology
Safety
Equity


Hey folks,

Unfortunately I've had a flight change and I'm going to be landing at 7:30 sydney time so will miss the start of our meeting. I can jump on when able if you're still online.

In the meantime, I've been working on the summary policy content as discussed and am hoping to have a few passages to you this evening, but I've also spent some time considering the data model that we want to use to manage this content.

My current requirements are that it should:
- Facilitate the current demand for summary policies based on ministerial portfolios.
- Help identify the gaps in our platform.
- Account for multifaceted nature of policies (e.g. policies can cover multiple topics)
- Incorporate existing policies and help us review them
- Provide a consistent and effective way to present our policy platform (e.g. website)
    - e.g. multiple levels of presentation, starting with eye-catching statements into more detailed explanations.
    - Searching and filtering, arranging by tags etc
- Allow for some level of version control

I've spent some time at the begining of this udertaking by looking at other party's websites and made some observations. Funnily enough, ALP and LNP are pretty dismal. I've put granular points at the bottom of this, but my main takeaway reaffirms that a tiered presentation of policies is effective. The Greens and Sustainable do this quite well.

Many parties (including us) group policies by topics or campaign slogans that have a brief blurb and then specific policies with differing levels of detail. I think we should stick with this kind of structure, but can do a lot with a smarter model that helps us mange the objectives defined above.

To this end, I've created this a structure within the policy app https://policy.fusionparty.org.au outside of the area that needs a login. 

The general concept is that there are tags that can be associated with policies like grouping structures. `Campaigns` are what I'm calling our current grouping structures on the website. `Portfolios` are the new structure. Both of these should have a 'summary' and then a number of policies associated with them, but policies might be associated with more than one portfolio or campaign.

I think there might be room for an extra layer based on our current website content, but I'm still considering that. 

I've added all the existing policies to the database, but have not yet tagged them all appropriately. (I also lost some work on content stuff that set me back somewhat)

The full structure can be seen via the admin system https://policy-admin.fusionparty.org.au/_/

- ALP(https://alp.org.au/policies) just has a brief 'plan' with drilldowns into 6 various policies
- LNP has effectively nothing.
- (greens.org.au/platform)[Greens] have a grid of topics/campaigns that drill down into somewhat detailed summary pages, that go further into more detailed PDFs. It's pretty good.
- https://www.sustainableaustralia.org.au/policies Sustainable Australia has a list of policy topics that are summarised in a sentence or two and then a 'read more' that goes into decent detail.
- (https://www.animaljusticeparty.org/our_policies)[Animal] justice party defines core policies, all their animal related stuff that they campaign on, and secondary 'positions' for non-animal issues. This works for their style of party but I don't think is right for Fusion. They also have a bit of filtering and searching.
- Reason has a bunch of policy topic headers that drill down into summary and bullet point summaries.