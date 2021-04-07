import React, {useEffect} from "react";
import {MDBCol, MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBRow} from "mdbreact";
import {ConnectWithUs} from "../../common/ConnectWithUs";


export const BlogPage2: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <MDBContainer>
            <MDBNav className="font-weight-bold p-0">
                <MDBNavItem>
                    <MDBNavLink active to='#' link className='black-text pl-0'>
                        Blogs
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNav>
            <br/>
            <MDBRow>
                <MDBCol md='12'>
                    <h1 className="display-4 font-weight-bold">
                        How I became a (proud) Ally
                    </h1>
                    <p>By Candice Rodrigues</p>
                </MDBCol>
            </MDBRow>
            <div className="container-xl">
                <MDBRow className='mt-5'>


                    <p>
                        My journey to become an ally wasn’t immediate or even straightforward,
                        there was a time I held conservative beliefs and thought being associated
                        with the community would bring shame and judgement on both me and my
                        family. Being an ally wasn’t an option I would have even considered then. I
                        never felt any hate towards the community, but I exercised feigned
                        ignorance regularly.
                    </p>
                    <p>
                        Before I continue, let me introduce myself. I’m a member of the LGBT+
                        ‘Employee Resource Group’ at SG, a core member of the ‘Plus Diversity’
                        pillar and one of the trainers behind the LGBT+ sensitisation movement in
                        SG GSC. So, how did I go from a conservative wall flower to a radical
                        sensitisation evangelist?
                    </p>
                    <p>
                        Well, I grew up in a very conservative middle-class household that didn’t
                        even accept the existence of the LGBT+ community, writing it off as a
                        symptom of having either too much or too little in this world. So naturally
                        my perception of the LGBT+ community was skewed, with pieces of information
                        cobbled together from what I saw on TV. Like the grotesquely incorrect
                        representations in films such as ‘Ace Venture Pet Detective’ or the
                        confusing dynamic in funny sitcoms like ‘Will &amp; Grace’; where I would
                        wish for the main character to realise he isn’t gay and instead fall in
                        love with his female best friend, every single episode.
                    </p>
                    <p>
                        I only started to question my knowledge or more appropriately the lack of
                        it, when I entered the corporate world. Here, I met and worked with members
                        of the community and as a result of which, was forced to confront my
                        ‘beliefs’, and see them for what they were, absolute lies masquerading as
                        truths. That’s when I started to question, learn and most importantly,
                        listen.
                    </p>
                    <p>
                        That still didn’t mean I was an ally though, I remember distinctly turning
                        down an invitation to a Pride Parade because I wanted to firmly fit in to
                        the herd, be one of the sheep and not the unicorn the community encouraged
                        me to be. I was still scared to be seen as one of <em>them</em>.
                    </p>
                    <p>
                        As years went by, I claimed to be an ally, but under that rainbow facade, I
                        was an imposter. How could I be an ally when I remained silent, happy to
                        accept the status quo that favoured me? How could I be an ally when I was
                        so busy blending in with the apathetic? Feeling like you’re a fraud, is
                        unsettling. So being a product of the corporate world, I decided to resolve
                        it with a tried true technique, ‘The 5-Why Analysis’
                    </p>
                    <p>
                        I asked myself 5 Why-questions with the hope of getting to the root of my
                        problem, they were:
                    </p>
                    <p>
                        1. Why did being an Ally make me feel uncomfortable?
                    </p>
                    <p>
                        2. Why was I scared of being a visible and vocal Ally?
                    </p>
                    <p>
                        3. Why did I think this would affect my life?
                    </p>
                    <p>
                        4. Why was I afraid of it having an impact on my career?
                    </p>
                    <p>
                        5. Why did I fear judgement of people/peers?
                    </p>
                    <p>
                        That’s when it occurred to me, if being a vocal and visible Ally inspired
                        so much discomfort in me, how would someone from the community then feel?
                        In answering all these questions, I had summarised for myself the daily
                        struggle faced by the LGBT+ community, simply for existing. I realised I
                        was scared to be treated like I’d seen society treat <em>them</em>.
                    </p>
                    <p>
                        That was the wakeup call I needed to change, my own epiphany and I’ve never
                        looked back. I decided I wouldn’t allow my fear to dictate my actions and
                        make me complicit. I researched the topic, connected with people that
                        broadened my understanding, identified like-minded individuals who I went
                        on to build safe spaces with and essentially equipped myself with the tools
                        I’d need on this journey to inspire myself and others.
                    </p>
                    <p>
                        It’s been years since and I continue to be a proud ally, evangelising the
                        importance of diversity &amp; inclusion in the workplace and hopefully
                        converting a few into allies along the way. The journey has been rewarding
                        and we’ve reached significant milestones in SG, with our gender neutral
                        washrooms, inclusive medical insurance and transition policies, as well as
                        our reverse mentoring program; but in the words of the poet Robert Frost,
                        “But I have promises to keep, and miles to go before I sleep, and miles to
                        go before I sleep”.
                    </p>

                </MDBRow>
            </div>
            <ConnectWithUs/>
        </MDBContainer>
    )
}