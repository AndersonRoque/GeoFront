import { connect } from 'react-redux';
import selectDatasets from '../selectors/datasets';

function run(props) {
    //console.log(props.datasets);
};

const mapStateToProps = (state) => {
    return {
        datasets: selectDatasets(state.datasets, state.filters)
    };
};

export default connect(mapStateToProps)(run);