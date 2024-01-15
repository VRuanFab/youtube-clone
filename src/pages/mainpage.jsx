//components
import Thumb from "../components/thumb_video";

//categorie bar
import Categories from "../navbar/insideBar";

//thumbs
import darkSouls3 from '../img/thumbs/darkSouls3.jpg';
import cut_my_lip from '../img/thumbs/cut_my_lip.jpeg';
import valorant from '../img/thumbs/valorant_tmb.jpg';
import gojou from '../img/thumbs/gojou_facts.jpg';

//icons
import solaire from '../img/icons/solaire_icon.png';
import twenty_icon from '../img/icons/twenty_icon.png';
import raze_icon from '../img/icons/raze_icon.jpg';
import g_icon from '../img/icons/g_icon.png';

function Mainpage() {

    return ( 
        <div className="">
            
        <div className="grid 2xl:grid-cols-5 space-x-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

                {Thumb(darkSouls3, solaire, 'How to farm sunlight medals in dark souls 3', 'The dark souls guy', '17 mil', '6 horas')}

                {Thumb(cut_my_lip, twenty_icon, 'Cut my lip', 'Twenty One Piløts', '29 mil', '5 anos')}

                {Thumb(valorant, raze_icon, 'Tutorial de como melhorar a mira', 'Soalis', '44 mil', '1 semana')}

                {Thumb(gojou, g_icon, "10 fatos sobre o gojou que você não sabia", 'Gabs', '44 mil', '1 semana')}

            </div>
        </div>

    );
}

export default Mainpage;