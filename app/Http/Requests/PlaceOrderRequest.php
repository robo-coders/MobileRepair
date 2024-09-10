<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlaceOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "brand_id" => "exists:brands,id",
            "product_id" => "exists:products,id",
            "part_id" => "exists:product_parts,id",
            "description" => "nullable|string",
            "delivery_address" => "required|integer|exists:addresses,id",
            "tax_percent" => "required|numeric|min:0|max:100",
            "tax_amount" => "required|numeric|min:0",
            "total" => "required|numeric",
            "generate_invoice" => "boolean",
            "card_token" => "required|string",
        ];
    }
}
