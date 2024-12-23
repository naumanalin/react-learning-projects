import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import "./chartBox.scss";

const ChartBox = (props) => {
    const {icon, title, number, color, chartData, dataKey, percentage} = props;
    console.log("chartData::",{ chartData, dataKey });

  return (
    <div className="chartBox">
        <div className="boxInfo">{/* boxInfo */}
            <div className="title">
                <img src={icon} alt="image" />
                <span>{title}</span>
            </div>
            <h1>{number}</h1>
            <Link to="/" style={{  }}>
                View all
            </Link>
        </div>{/* end boxInfo */}

        <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                />
                <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>

            </div>
            <div className="texts">
                <span className="percentage" style={{ color: percentage < 0 ? "tomato" : "limegreen" }}>{percentage}%</span>
                <span className="duration">this month</span>
            </div>
        </div>{/* end chartInfo */}
    </div>
  )
}

export default ChartBox