import BarChartBox from "../../components/barChartBox/BarChartBox.jsx";
import BigChartBox from "../../components/bigChartBox/BigChartBox.jsx";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox.jsx";
import TopBox from "../../components/topBox/TopBox";
import {chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxRevenue, barChartBoxVisit} from '../../constants/recharts-data.js'
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
        <div className="box box1"><TopBox/></div>
        <div className="box box2"><ChartBox {...chartBoxUser} /></div>
        <div className="box box3"><ChartBox {...chartBoxRevenue} /></div>
        <div className="box box4"><PieChartBox/></div>
        <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
        <div className="box box6"><ChartBox {...chartBoxProduct} /></div>
        <div className="box box7"><BigChartBox/></div>
        <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
        <div className="box box9"><BarChartBox {...barChartBoxVisit } /></div>

    </div>
  )
}

export default Home