import  '../styles/detail.css';

function Detail() {

    return (
        <div className='detail_box'>
            <h2>One way</h2>
            <table className="Detail-table">
                <tbody>
                    <tr className="table-row">
                        <td><h2>Pasenger(s): 1</h2> </td> <td></td> <td><h3>Cabin:</h3><h2>Economy</h2></td>
                    </tr><br/>
                    <tr className="table-row">
                        <td>From <br/><h2><b>New Delhi<br/>(DEL)</b></h2></td><td></td><td>To <br/><h2><b>Mumbai<br/>(BOM)</b></h2></td>
                    </tr><br/>
                    <br/>
                    <tr className="table-row">
                        <td>Departure<br/> <b><h2>07-12-2021</h2></b></td><td></td><td>Return<br/><b><h2>09-12-2021</h2></b></td>
                    </tr><br/>
                    
                </tbody>
            </table>
        </div>
    )
}
export default  Detail;