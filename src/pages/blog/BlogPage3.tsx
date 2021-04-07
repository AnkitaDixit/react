import React, {useEffect} from "react";
import {MDBCol, MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBRow} from "mdbreact";
import {ConnectWithUs} from "../../common/ConnectWithUs";


export const BlogPage3: React.FC = () => {
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
                        Accessibility for women with disabilities in times of COVID-19
                    </h1>
                    <p>By Tiffany Brar</p>
                </MDBCol>
            </MDBRow>
            <div className="container-xl">
                <MDBRow className='mt-5'>

                    <p>
                        Hearing the news of the lockdown in late March, I immediately thought of
                        all the blind students I work with. I knew accessibility was going to
                        change drastically and it had me worried. India is home to a large
                        percentage of the worlds disabled population. But during the lockdown and
                        after, especially in a time of a crisis, were our accessibility needs met?
                        <br/>
                    </p>
                    <p>
                        I remember walking on a main road after the lockdown to buy some essentials
                        and it didn’t feel like a main road at all. It was quiet and I couldn’t
                        hear the sound of a single vehicle. Finding it hard to navigate the space
                        as a blind woman, I requested my care giver to go out and do the necessary
                        shopping for me. It made me think about the numbers of disabled young girls
                        and women who might not have had this support.
                    </p>
                    <p>
                        Experiences of inaccess and worry were not new for disabled people but the
                        pandemic definitely made things worse. In a research conducted by Rising
                        Flame and Sightsavers, it was found that 75 out of the 82 women who
                        participated in the study had struggled with accessing either information,
                        accessing physical spaces, communication, digital spaces, health services,
                        food and other essentials.
                    </p>
                    <p>
                        The report pointed out that there was a rise difficulties in accessing
                        tactile support - especially for blind individuals like me. Mobility is a
                        huge challenge, as we can’t rely on the landmarks we used to, such as,
                        smells, sounds, voices. Additionally, navigating the roads by ourselves is
                        difficult because of the numbers of potholes, and cracks, which force us to
                        need public assistance.
                    </p>
                    <p>
                        The report discussed the trouble of mobility and the fears attached to it
                        even as lockdown lifts. One such experience quoted in the report was by a
                        39-year-old woman with locomotor disability, Ahmednagar, Maharashtra: “I
                        had gone to buy some ration, and there my crutches slipped. I fell down. In
                        normal times, someone definitely used to come to pick me up if this sort of
                        a thing happened. But that day, no one came. Then I took out my sanitizer
                        from my purse, and gave it to the shopkeeper, and then he came to help me
                        get up.”
                    </p>
                    <p>
                        Apart from social distancing which has been creating further access
                        barriers, Deaf and persons who are hard of hearing interviewed for the
                        report found particular challenges in social distancing and the using of
                        masks.A 31-year-old Deaf woman, Mumbai, Maharashtra said, “They are wearing
                        a mask and saying something, it will be more difficult to hear. I will need
                        an interpreter; I will not be independent. I have to depend on somebody for
                        communication.”
                    </p>
                    <p>
                        Social distancing and wearing of masks are very important safety measures
                        we need to adapt to stay safe from the virus. But it is important to ask
                        how these measures are harming disabled people. Whether it is for blind
                        women, deaf women, or women with locomotor disability, limited mobility is
                        a huge barrier to their independence.
                    </p>
                    <p>
                        Even as the lockdown lifts and “normalcy” is returned to in many of our
                        cities and states, it is important to reflect on accessibility in these
                        times. Inability to access information, hits the deaf community the
                        hardest, as they are always kept in the dark, due to lack of awareness
                        about their communication needs - especially since such little content is
                        available in sign language in India. The other thing noted by the study was
                        that the source of information on the pandemic, the Arogyasetu App is not
                        accessible. How can other blind and low vision individuals like me access
                        guidelines and other details about the pandemic if the app stays
                        inaccessible?
                    </p>
                    <p>
                        Access is not just hindering our immediate present but severely impacting
                        the future of millions of persons with disabilities, particularly, women
                        with disabilities in the areas of education and livelihood. As a 20-year
                        old Deafblind college student, Delhi reported in the study: “No special
                        assistance, no captions or text are shared. Most of the assignments are
                        PDFs scanned and sent which mean someone needs to read out to me.” Thus
                        alienating her further from education and learning.
                    </p>
                    <p>
                        In a country as vast as ours, access to accessible information,
                        communication technologies is not uniform. For some of us access to the
                        internet enables better connection but internet connection in rural areas
                        can be poor or limited. This affects not just access to information but
                        access to education, remote learning, digital connections and even access
                        to food and essentials.Thus access to information, access to digital spaces
                        for disabled people, and women and girls in particular cannot be ignored
                        anymore.
                    </p>
                    <p>
                        As lockdown lifts, we should bring about more measures to assist persons
                        with disabilities to travel to work/school/college, or provide accessible
                        online platforms for them to work at home.We should not lose the small
                        victories we have achieved in attaining accessibility.
                    </p>
                    <p>
                        Some recommendations provided by the report are:
                    </p>
                    <p>
                        - Make all communications/ information/ announcements regarding COVID-19,
                        the lockdowns and the unlocking processes be in plain language and made
                        available in a range of accessible formats
                    </p>
                    <p>
                        - Design, in consultation with persons with disabilities, social distancing
                        norms which consider the access and support needs of persons with
                        disabilities and ensure public awareness on the same
                    </p>
                    <p>
                        - Digital media should include materials in accessible formats and meet the
                        accessibility guidelines as well as provide for sign language
                        interpretation for all new bulletins. This includes all websites, apps,
                        communication platforms, news portals.
                    </p>
                    <p>
                        If we have to build a new normal, we cannot do it by leaving disabled
                        people behind.
                    </p>

                </MDBRow>
            </div>
            <ConnectWithUs/>
        </MDBContainer>
    )
}