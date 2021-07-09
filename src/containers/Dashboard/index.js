import React from 'react';
import { Typography } from '@material-ui/core';
import FadeIn from 'react-fade-in';
import useSWR from 'swr';
import live from '../../assets/gif/live.gif';
import Grid from '@material-ui/core/Grid';
import SingleValueMetric from '../../components/SingleValueMetric';
import StateWiseCases from '../../components/StateWiseCases';

const key = 'https://api.covid19india.org/data.json';

const fetcher = async (key) => {
  const response = await fetch(key);
  return response.json();
}
function Dashboard() {
  const { data, error } = useSWR(key, fetcher);
  const [barGraphData, setBarGraphData] = React.useState([]);
  const [states, setStates] = React.useState([]);
  console.log(data);

  React.useEffect(() => {
    const statewiseData = {};
    if (data) {

      let stateNames = data.statewise.map(item=>({
        name: item.state
      }));
      setStates(stateNames);

      data.statewise.map(item => {
        statewiseData[item.state] = [
          {name: 'active', Cases: item.active},
          {name: 'confirmed', Cases: item.confirmed},
          {name: 'deaths', Cases: item.deaths}
        ]
      })
      setBarGraphData(statewiseData);
    }
  }, [data])
  return (
    <>
      <FadeIn>
        <Typography variant="h2" style={{ color: '#fff' }} align="center">Covid-19 Tracker</Typography>
      </FadeIn>
      <FadeIn delay={600}>
        <Typography variant="h5" style={{ color: '#fff' }} align="center"><img src={live} style={{ width: 20, height: 20 }} />LIVE</Typography>
        <Grid container spacing={4} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={4}>
            <SingleValueMetric style={{ color: '#0cf730' }} title="Active Cases" value={data?.statewise[0]?.active ?? 0} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SingleValueMetric style={{ color: '#ff7e0d' }} title="Confirmed Cases" value={data?.statewise[0]?.confirmed ?? 0} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SingleValueMetric style={{ color: '#e04419' }} title="Total Deaths" value={data?.statewise[0]?.deaths ?? 0} />
          </Grid>
        </Grid>
        <StateWiseCases graphData={barGraphData} states={states}/>
      </FadeIn>
    </>
  )
}

export default Dashboard
