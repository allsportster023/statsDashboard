import React from 'react';
import Sidebar from './Sidebar';



class TimeListPanel extends React.Component {



  render() {

    return (
      <div>
        Search
        <div>


          <div className="container">
                <div className="row">
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <div className='input-group date' id='datetimepicker1'>
                                <input type='text' class="form-control" />
                                <span class="input-group-addon">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <script type="text/javascript">
                        $(function () {
                            $('#datetimepicker1').datetimepicker();
                        });
                    </script>
                </div>
            </div>




        </div>

      </div>
    )}
}



export default TimeListPanel
