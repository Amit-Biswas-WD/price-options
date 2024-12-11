
import PriceOption from './../PriceOption/PriceOption';
const PriceOptions = () => {

    const gymPricingOptions = [
        {
          id: 2,
          name: "Standard Plan",
          price: 50,
          currency: "USD",
          features: [
            "Access to gym floor equipment",
            "Locker room and shower",
            "Unlimited group classes",
            "Access to the swimming pool",
            "Free Wi-Fi"
          ]
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 80,
          currency: "USD",
          features: [
            "Access to gym floor equipment",
            "Locker room and shower",
            "Unlimited group classes",
            "Access to the swimming pool",
            "Free Wi-Fi",
            "Personal training sessions",
            "Nutrition consultation"
          ]
        },
        {
          id: 4,
          name: "Elite Plan",
          price: 120,
          currency: "USD",
          features: [
            "Access to gym floor equipment",
            "Locker room and shower",
            "Unlimited group classes",
            "Access to the swimming pool",
            "Free Wi-Fi",
            "Unlimited personal training",
            "Nutrition consultation and meal",
            "VIP lounge access",
            "Priority class booking"
          ]
        }
      ];
            

  return (
    <div className='m-12'>
        <h2 className='text-5xl mb-8'>Best price in the town.</h2>
        <div className='grid md:grid-cols-3 gap-6'>
        {gymPricingOptions.map(option => <PriceOption key={option.id} option={option} /> )}
        </div>
    </div>
  )
}

export default PriceOptions