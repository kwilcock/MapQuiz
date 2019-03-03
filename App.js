import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, Path } from "react-native-svg";
import _ from 'lodash';
import PinchZoomView from 'react-native-pinch-zoom-view';
import USMap from './USMap.js';

STATE_FILL_COLOR = '#bbbbbb'
SELECTED_FILL_COLOR = '#2C8E4E'
STATES = {
  'AL': { fillColor: STATE_FILL_COLOR, name: 'Alabama', selected: false },
  'AK': { fillColor: STATE_FILL_COLOR, name: 'Alaska', selected: false },
  'AZ': { fillColor: STATE_FILL_COLOR, name: 'Arizona', selected: false },
  'AR': { fillColor: STATE_FILL_COLOR, name: 'Arkansas', selected: false },
  'CA': { fillColor: STATE_FILL_COLOR, name: 'California', selected: false },
  'CO': { fillColor: STATE_FILL_COLOR, name: 'Colorado', selected: false },
  'CT': { fillColor: STATE_FILL_COLOR, name: 'Connecticut', selected: false },
  'DC': { fillColor: STATE_FILL_COLOR, name: 'District of Columbia', selected: false },
  'DE': { fillColor: STATE_FILL_COLOR, name: 'Delaware', selected: false },
  'FL': { fillColor: STATE_FILL_COLOR, name: 'Florida', selected: false },
  'GA': { fillColor: STATE_FILL_COLOR, name: 'Georgia', selected: false },
  'HI': { fillColor: STATE_FILL_COLOR, name: 'Hawaii', selected: false },
  'ID': { fillColor: STATE_FILL_COLOR, name: 'Idaho', selected: false },
  'IL': { fillColor: STATE_FILL_COLOR, name: 'Illinois', selected: false },
  'IN': { fillColor: STATE_FILL_COLOR, name: 'Indiana', selected: false },
  'IA': { fillColor: STATE_FILL_COLOR, name: 'Iowa', selected: false },
  'KS': { fillColor: STATE_FILL_COLOR, name: 'Kansas', selected: false },
  'KY': { fillColor: STATE_FILL_COLOR, name: 'Kentucky', selected: false },
  'LA': { fillColor: STATE_FILL_COLOR, name: 'Louisiana', selected: false },
  'ME': { fillColor: STATE_FILL_COLOR, name: 'Maine', selected: false },
  'MD': { fillColor: STATE_FILL_COLOR, name: 'Maryland', selected: false },
  'MA': { fillColor: STATE_FILL_COLOR, name: 'Massachusetts', selected: false },
  'MI': { fillColor: STATE_FILL_COLOR, name: 'Michigan', selected: false },
  'MN': { fillColor: STATE_FILL_COLOR, name: 'Minnesota', selected: false },
  'MS': { fillColor: STATE_FILL_COLOR, name: 'Mississippi', selected: false },
  'MO': { fillColor: STATE_FILL_COLOR, name: 'Missouri', selected: false },
  'MT': { fillColor: STATE_FILL_COLOR, name: 'Montana', selected: false },
  'NE': { fillColor: STATE_FILL_COLOR, name: 'Nebraska', selected: false },
  'NV': { fillColor: STATE_FILL_COLOR, name: 'Nevada', selected: false },
  'NH': { fillColor: STATE_FILL_COLOR, name: 'New Hampshire', selected: false },
  'NJ': { fillColor: STATE_FILL_COLOR, name: 'New Jersey', selected: false },
  'NM': { fillColor: STATE_FILL_COLOR, name: 'New Mexico', selected: false },
  'NY': { fillColor: STATE_FILL_COLOR, name: 'New York', selected: false },
  'NC': { fillColor: STATE_FILL_COLOR, name: 'North Carolina', selected: false },
  'ND': { fillColor: STATE_FILL_COLOR, name: 'North Dakota', selected: false },
  'OH': { fillColor: STATE_FILL_COLOR, name: 'Ohio', selected: false },
  'OK': { fillColor: STATE_FILL_COLOR, name: 'Oklahoma', selected: false },
  'OR': { fillColor: STATE_FILL_COLOR, name: 'Oregon', selected: false },
  'PA': { fillColor: STATE_FILL_COLOR, name: 'Pennsylvania', selected: false },
  'RI': { fillColor: STATE_FILL_COLOR, name: 'Rhode Island', selected: false },
  'SC': { fillColor: STATE_FILL_COLOR, name: 'South Carolina', selected: false },
  'SD': { fillColor: STATE_FILL_COLOR, name: 'South Dakota', selected: false },
  'TN': { fillColor: STATE_FILL_COLOR, name: 'Tennessee', selected: false },
  'TX': { fillColor: STATE_FILL_COLOR, name: 'Texas', selected: false },
  'UT': { fillColor: STATE_FILL_COLOR, name: 'Utah', selected: false },
  'VT': { fillColor: STATE_FILL_COLOR, name: 'Vermont', selected: false },
  'VA': { fillColor: STATE_FILL_COLOR, name: 'Virginia', selected: false },
  'WA': { fillColor: STATE_FILL_COLOR, name: 'Washington', selected: false },
  'WV': { fillColor: STATE_FILL_COLOR, name: 'West Virginia', selected: false },
  'WI': { fillColor: STATE_FILL_COLOR, name: 'Wisconsin', selected: false },
  'WY': { fillColor: STATE_FILL_COLOR, name: 'Wyoming', selected: false },
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPressState = this.onPressState.bind(this);
    this.state = {
      states: STATES,
    }
  }
  onPressState(stateAbbr) {
    let states = _.clone(this.state.states);
    states[stateAbbr].selected = true;
    states[stateAbbr].fillColor = SELECTED_FILL_COLOR;
    this.setState({ states });
  }

  render() {
    return (
      <PinchZoomView minScale={1} maxScale={4} style={styles.container}>
        <USMap onPressState={this.onPressState} states={this.state.states} />
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077BE',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
