import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { isMobile } from 'react-device-detect';

const CarouselComp = () => {

    return (
        <div>
            <Carousel>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/1.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
                <p className="bg-dark rounded">Svært behagelig cockpit med god oversikt. Cruisecontrol. En haug med koppholdere og USB-utganger.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/2.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Mercedes Benz MBUX media center gir det man trenger av informasjon og lyd underveis. Alpine stereoanlegg med sub-woofer gir fyldig og god lyd når man er på veien.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/3.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Multifunksjonsratt med cruisecontrol. Bilen har fjernstyrte luftfjæringer, aircondition, og gulvvarmeutveksler slik at motorvarmen kan veksles mot gulvvarmen og motsatt. Aldri for kaldt eller for varmt.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/4.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Kjøkken og salong. Avlangt kjøkken gjør at bilen blir romslig. Stekeovn og kjøl/frys til høyre.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/5.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">God benkeplass. Dekkskive over vask og glass-deksel over gassblussene. Dekkskiven kan legges inn i skuffe som trekkes ut for å øke benkeplassen når bluss eller vask benyttes.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/6.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Kjøkkenbenk med 3 gassbluss og vask.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
            {!isMobile &&  <img className="d-block w-75 rounded" style={{height:'700px'}} src="./images/7.png" alt="Third slide"/> }
            {isMobile &&  <img className="d-block w-75 rounded"  src="./images/7.png" alt="Third slide"/> }
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Stekeovn øverst (gass), samt fryser og kjøleskap som går på 12v (under kjøring), 230v eller gass når man er parkert.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/8.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Salong med god plass og fleksibelt bord - kan vris i alle retninger og skyves slik at det passer i forhold til hvor mange som sitter rundt. Bordet kan utvides.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/9.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Romslig og behagelig sittegruppe i skinn med 2 kapteinsstoler for hyggelige kvelder.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/10.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Fra salong mot kjøkkenet. TV (her innfelt) på 34" kan være redningen en regnværskveld når man har gått lei av Ludo.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/11.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">2 x 11 kg gasstanker med industriventil, krasjsensor, automatisk omskifter, varme i regulator for vinterbruk.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/12.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded"> Stor "garasje" med plass til det meste for lang eller kort tur. Her passer det fint med f.eks. et par elsykler for tur og sightseeing.

Her er det også god plass til ski/snøbrett, sko og vinterklær. Garasjen er oppvarmet slik at her har man også tørkemulighet. Det er 230v og 12v uttak i garasjen til lading og eventuell skotørker (følger ikke med).

Det er flere andre lasterom i tillegg til mye skapplass inne i bilen.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/13.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Bilen har vinterdekk eller sommerdekk etter sesong. Tvillinghjul bak og luftfjæringer gjør at bilen oppfører seg pent på veien - "gynger" ikke slik som mange tunge biler kan gjøre.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/14.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Dobbeltseng bak kan deles (som på bilde) eller kobles med en madrassdel slik at den fyller ut helt. </p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/15.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">TV bak. Skyvedør gjør at sengen bak kan stenges av fra bad og kjøkken/salong. </p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                {!isMobile &&  <img className="d-block w-75 rounded" style={{height:'700px'}} src="./images/16.png" alt="Third slide"/> }
                {isMobile &&  <img className="d-block w-75 rounded"  src="./images/16.png" alt="Third slide"/> }
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Dusj. Også hendig til tørking av bløte klær.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                {!isMobile &&  <img className="d-block w-75 rounded" style={{height:'700px'}} src="./images/17.png" alt="Third slide"/> }
                {isMobile &&  <img className="d-block w-75 rounded"  src="./images/17.png" alt="Third slide"/> }
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Bad, vask, toalett med avsug. Badet stenges av mot kjøkken med dør som lukker tvers over gangen, og mot soverom bak med skyvedør, slik at det størrelsen på badet blir lik hele bilens bredde.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/18.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Badet har håndkletørker som varmes av Alde-gulvvarmesystemet.</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                {!isMobile &&  <img className="d-block w-75 rounded" style={{height:'700px'}} src="./images/19.png" alt="Third slide"/> }
                {isMobile &&  <img className="d-block w-75 rounded"  src="./images/19.png" alt="Third slide"/> }
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Badet med dør mot kjøkken lukket. I taket ser man aircondition som også fungerer som avfukter når dusjen brukes. </p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <img className="d-block w-75 rounded" src="./images/20.png" alt="Third slide"/>
            </div>
            {!isMobile &&
            <Carousel.Caption>
            <p className="bg-dark rounded">Senkesengen er behagelig stor til 2 voksne. God takhøyde i tillegg til lufting via takluken. Sengen er så langt fremme at det går å bruke salongen når den er nede. Det går også fint å komme ut døra når sengen er nede. (Sengens bredde kan økes med tilleggsmadrasser for enda mer plass.)</p>
            </Carousel.Caption>
            }
        </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default CarouselComp

