import React from 'react'
import "./card.css"
import CardHeader from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';


export default function Card() {
    return (
        <div>
            <table class="table">
                <thead class="thead-light">
                   <tr>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Date Paid</th>
                    <th scope="col">Method</th>
                    <th scope="col">Amount Paid</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Action</th>                  
                   </tr> 

                </thead>

                <tbody>
                    <tr>
                    <th data-title="Transaction Id" scope="row">4546574</th>
                    <td data-title="Date Paid">05/1/2021</td>
                    <td data-title="Method">online</td>
                    <td data-title="Amount Paid">$370</td>
                    <td data-title="Balance">$450</td>
                    <td data-title="Action">A</td>
                    </tr>
                    
                    <tr>
                    <th data-title="Transaction Id" scope="row">4546574</th>
                    <td data-title="Date Paid">05/1/2021</td>
                    <td data-title="Method">online</td>
                    <td data-title="Amount Paid">$370</td>
                    <td data-title="Balance">$450</td>
                    <td data-title="Action">A</td>
                    </tr>

                    <tr>
                    <th data-title="Transaction Id" scope="row">4546574</th>
                    <td data-title="Date Paid">05/1/2021</td>
                    <td data-title="Method">online</td>
                    <td data-title="Amount Paid">$370</td>
                    <td data-title="Balance">$450</td>
                    <td data-title="Action">A</td>
                    </tr>


                </tbody>

            </table>
        </div>
    )
}
