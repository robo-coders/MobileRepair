<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Template</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            color: #555;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
        }

        .invoice-box {
            font-size: 16px;
            line-height: 24px;
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
            border-collapse: collapse;
        }

        .invoice-box table td {
            padding: 10px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title h1 {
            font-size: 45px;
            line-height: 45px;
            color: #333;
            font-weight: bold;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            padding: 10px;
            text-align: left;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
            padding: 10px;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td {
            border-top: 2px solid #eee;
            font-weight: bold;
            padding: 10px;
        }

        .invoice-box table tr.total td.subtotal-label,
        .invoice-box table tr.total td.grandtotal-label {
            text-align: right;
        }

        .invoice-box table tr.total td.subtotal-amount,
        .invoice-box table tr.total td.grandtotal-amount {
            text-align: right;
            color: #333;
        }

        .invoice-box table.footer {
            width: 100%;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }

        .invoice-box table.footer td {
            width: 50%;
            padding-top: 20px;
            vertical-align: top;
        }

        .invoice-box .contact-info {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #333;
            background: #eee;
            padding: 1em;
            font-weight: bold;
        }

        .invoice-details {
            text-align: right;
        }

        .invoice-details h2 {
            color: #007bff;
            margin-bottom: 5px;
        }

    </style>
</head>
<body>
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="6">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="images/logo.png" style="width: 250px; height: auto;" alt="">
                            </td>
                            <td class="invoice-details">
                                <h2>INVOICE</h2>
                                <div>Invoice Number: <strong>#{{ strtoupper($order->order_number) }}</strong></div>
                                <div>Invoice Date: <strong>{{ \Carbon\Carbon::parse($order->created_at)->toFormattedDayDateString() }}</strong></div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="information">
                <td colspan="6">
                    <table>
                        <tr>
                            <td>
                                <strong>INVOICE TO</strong><br>
                                {{ $user->name }}<br>
                                {{ $user->email }}<br>
                                {{ $order->address->address }}
                            </td>
                            <td>
                                <strong>PAYMENT METHOD</strong><br>
                                Credit Card<br>
                                <strong>INVOICE PAID DATE</strong><br>
                                {{ \Carbon\Carbon::parse($order->created_at)->toFormattedDayDateString() }}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="heading">
                <td>LOGO</td>
                <td>BRAND</td>
                <td>MODEL</td>
                <td>PART</td>
                <td>PRICE</td>
                <td>TOTAL</td>
            </tr>
            <tr>
                <td>
                    <img height="auto" width="75" src="{{ $order->brand->image }}" alt="">
                </td>
                <td>{{ strtoupper($order->brand->name) }}</td>
                <td>{{ ucwords($order->product->name) }}</td>
                <td>{{ ucwords($part->name) }}</td>
                <td>€ {{ $part->customer_price }}</td>
                <td>€ {{ $part->customer_price }}</td>
            </tr>
            <tr class="total">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="subtotal-label">Subtotal</td>
                <td class="subtotal-amount">€ {{ $part->customer_price }}</td>
            </tr>
            <tr class="total">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="grandtotal-label">Grand Total</td>
                <td class="grandtotal-amount">€ {{ $part->customer_price }}</td>
            </tr>
        </table>
        <table class="footer">
            <tr>
                <td>
                    <strong>PAYMENT INFO</strong><br>
                    Account Name: 647 840<br>
                    Account Number: Jhon Doe<br>
                    Branch Name: xyz
                </td>
                <td>
                    <strong>TERMS AND CONDITIONS</strong><br>
                    Once order done, money can’t refund. Delivery might delay due to some external
                </td>
            </tr>
        </table>
        <div class="contact-info">
            <p>+00 123 647 840 | info@reparapido.es | Avenida cami nou 64 bajo xirivella valencia 46950</p>
        </div>
    </div>
</body>
</html>
