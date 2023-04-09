import React from 'react';
import CarouselComp from '../components/Carousel'
import BenzSVG from './icons/BenzSVG';
import BenzSVGMobile from './icons/mobileIcons/BenzSVGMobile';
import BedSVG from './icons/BedSVG';
import BedSVGMobile from './icons/mobileIcons/BedSVGMobile';
import MotorSVG from './icons/MotorSVG';
import MotorSVGMobile from './icons/mobileIcons/MotorSVGMobile';
import SquareSVG from './icons/SquareSVG';
import SquareSVGMobile from './icons/mobileIcons/SquareSVGMobile';
import CampingSVG from './icons/CampingSVG';
import CampingSVGMobile from './icons/mobileIcons/CampingSVGMobile';
import WinterSVG from './icons/WinterSVG';
import WinterSVGMobile from './icons/mobileIcons/WinterSVGMobile';
import GPSSVG from './icons/GPSSVG';
import GPSSVGMobile from './icons/mobileIcons/GPSSVGMobile';
import StereoSVG from './icons/StereoSVG';
import StereoSVGMobile from './icons/mobileIcons/StereoSVGMobile';
import ChromecastSVG from './icons/ChromecastSVG';
import ChromecastSVGMobile from './icons/mobileIcons/ChromecastSVGMobile';
import OvenSVG from './icons/OvenSVG';
import OvenSVGMobile from './icons/mobileIcons/OvenSVGMobile';
import BathroomSVG from './icons/BathroomSVG';
import BathroomSVGMobile from './icons/mobileIcons/BathroomSVGMobile'
import SensorSVG from './icons/SensorSVG';
import SensorSVGMobile from './icons/mobileIcons/SensorSVGMobile';
import { Helmet } from 'react-helmet';
import { isMobile } from 'react-device-detect';



function About() {
  return (
    <>
    <Helmet>
        <title>Leie Bobil Sandnes</title>
        <meta name="description" content="Leier ut Frankia Platin I7900 GD bobil i Sandnes" />
        <meta name="keywords" content="bobil, Frankia, platin, I7900, Sandnes, Leie, utleie, ferie, camping, campingvogn, Stavanger, stor, 2022, 2023, diesel, fricamping" />
      </Helmet>
        <section id="about" >
            <div class="p-5 text-white" style={{backgroundColor:'#262626', fontFamily: 'Opensans, sans-serif',}}> 
                <h1 className="p-2 pb-4">OM BOBILEN</h1>

        <div className="d-flex pl-10"> {!isMobile && <BenzSVG /> } {isMobile && <BenzSVGMobile />} <p className="p-2 text-white"> 2022 modell basert på Mercedes Benz, 190HK automat, 5,5 tonn (krever C1-sertifikat). </p> </div>
        
            <div className="d-flex pl-10"> {!isMobile && <BedSVG /> } {isMobile && <BedSVGMobile />} <p className="p-2">   Sitte og soveplass til 4. Stor dobbeltseng bak, og stor dobbelt senkeseng foran. Alt av utstyr.</p> </div>

            <div className="d-flex pl-10"> {!isMobile && <MotorSVG /> } {isMobile && <MotorSVGMobile />} <p className="p-2 text-white">Meget velutstyrt bil som er behagelig å kjøre med en kraftig og relativt gjerrig dieselmotor, automatgear, tvillinghjul, bakhjulsdrift og luftfjæringer. </p> </div>
            
            <div className="d-flex pl-10"> {!isMobile && <SquareSVG /> } {isMobile && <SquareSVGMobile />} <p className="p-2 text-white"> Svært romslig med 804cm lengde, 230cm bredde og over 2m takhøyde innvendig.</p> </div> 

            <div className="d-flex pl-10"> {!isMobile && <CampingSVG /> } {isMobile && <CampingSVGMobile />} <p className="p-2 text-white">Klar for fricamping med 4 solcellepanel og 2 lithiumbatterier, inverter og 2x11kg gass. Aircondition. 280-liters ferskvannstank, 140-liters gråvannstank, 2 toalett-tanker. </p> </div>
                
            <div className="d-flex pl-10"> {!isMobile && <WinterSVG /> } {isMobile && <WinterSVGMobile />} <p className="p-2 text-white"> Klar for vinterbruk med vinterdekk, dobbeltgulv, og Alde vannbåren gulvvarme og varme i tankene. </p> </div>

            <div className="d-flex pl-10"> {!isMobile && <GPSSVG /> } {isMobile && <GPSSVGMobile />} <p className="p-2 text-white">Navigasjon både i MBUX som er Mercedes innebygde enhet og egen 10"
                Garmin Camper navigator som sikrer veivalg som er tilpasset bilens dimensjoner og vekt gjennom det meste av Europa.</p> </div>

            <div className="d-flex pl-10"> {!isMobile && <StereoSVG /> } {isMobile && <StereoSVGMobile />} <p className="p-2 text-white"> Underholdning ivaretas med Alpine stereoanlegg og MBUX mediacenter, 34" TV/DVD foran og 24" TV bak. </p> </div>

            <div className="d-flex pl-10"> {!isMobile && <ChromecastSVG /> } {isMobile && <ChromecastSVGMobile />} <p className="p-2 text-white"> TV'ene har Chromecast 4, automatisk parabol og 4G-modem med WIFI. (abonnement etter avtale).</p> </div>

            <div className="d-flex pl-10"> {!isMobile && <OvenSVG /> } {isMobile && <OvenSVGMobile />} <p className="p-2 text-white"> Kjøkken med 3 bluss, kjøleskap, frys, vask, varmt og kaldt vann. Nespresso-maskin og vannkoker.</p> </div>

            <div className="d-flex pl-10"> {!isMobile && <BathroomSVG /> } {isMobile && <BathroomSVGMobile />} <p className="p-2 text-white"> Romslig bad med dusj og toalett med luftavsug for en behagelig toalettopplevelse for alle i bilen.</p> </div>

            <div className="d-flex pl-10"> {!isMobile && <SensorSVG /> } {isMobile && <SensorSVGMobile />} <p className="p-2 text-white"> Parkeres lett med ryggekamera og blindsonekamera, og rigges opp og ned på minutter med hydrauliske støtteben styrt på touch-skjerm inne i bilen. </p> </div>

            <CarouselComp />

            <p className="p-2 pt-5"> Av andre praktiske ting er det fjernstyrt markise, LED utelys, elektriske trapper, elektriske speil,
                snelle med slange til å fylle vann, automatisk inntrekk på strømkabel og 25m ekstra forlengerkabel.
                Bilen har naturligvis gass/narkosegass/brann-alarm. Bilen har ikke luftinntak som er lett tilgjengelig fra bakkeplan.</p>
            <p className="p-2"> For ytterligere informasjon, tilgjengelighet eller bestilling ta kontakt på epost: <a href='mailto:luksusbobil@aardal.com' style={{color: '#F06000'}}>luksusbobil@aardal.com</a> </p>
                
            </div>
        </section>
    </>
  );
}

export default About;