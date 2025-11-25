"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PreArrivalPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(
    "arrival-notification"
  );

  const faqs = [
    {
      id: "arrival-notification",
      title: "Notifying The College Of Your Arrival",
      content:
        "Before you leave home, please let us know when you are due to arrive at the Airport. We may arrange you to pick up from the airport if necessary. Please note, this service costs approximately an additional £50 (one way) and is payable in pound Sterling to your driver upon arrival at your destination. If you are making your own way by train to central London, you should take a train from (take Underground from Heathrow change where necessary). You can find out the train times in the UK from the Rail track web site at: http://www.tfl.gov.uk/ and http://www.rail.co.uk/ukrail/planner/planner.htm",
    },
    {
      id: "accommodation",
      title: "Accommodation",
      content:
        "Start making arrangements as soon as you have been accepted on your course. This is especially important if you are planning to bring your family with you. Contact our student welfare office. They have lists of local accommodation to rent and may help arrange the accommodation for you. They will inspect the accommodation and can help you if you have any problems.",
    },
    {
      id: "airport",
      title: "Arriving At A UK Airport",
      content:
        "When you arrive in Britain your first stop is Passport Control for which you will see two different signs. One queue is for EEA and British passport holders, and one for holders of all other passports. You may need to show the Immigration Officer all your documents and answer any questions regarding your stay in the UK. The Immigration Officer will usually put a date stamp in your passport to show the date you entered the UK. You will have permission to stay until your visa or entry clearance expires. Our Student Welfare officer can arrange to pick you up from the airport if necessary.",
    },
    {
      id: "immigration",
      title: "Immigration Control",
      content:
        "You should have the following documents ready when you arrive at the port of entry, in order to pass through immigration control. Please remember not to pack them but keep them on your person: A valid passport endorsed with the necessary entry clearance or visa, Your official College letter of acceptance,  Evidence of sufficient funds to cover your fees and living costs for the academic year,  Any health certificates required. If the immigration officer refuses you entry and you have NO entry clearance you may be removed immediately, or given a very short period of admission. If your entry is refused and you HAD obtained entry clearance, then you cannot be removed until after your appeal has been heard.",
    },
    {
      id: "currency",
      title: "Obtaining British Currency",
      content:
        "We recommend that you have at least £200 in British currency with you when you travel to cover your costs en route to the College and early incidental expenses. If you have not obtained British currency before leaving home, you should do so on arrival in the UK. There are banks and currency exchange desks at all airports. Remember, you will need to pay your driver approximately £50 upon arrival at your destination. The unit of currency is the pound sterling (£). It is divided into one hundred pence (100p). The coinage issued is the 1p, 2p, 5p, 10p, 20p, 50p £1 and £2. Paper notes are issued in £5, £10, £20 and £50.",
    },
    {
      id: "customs",
      title: "Customs",
      content:
        "You will then have to pass through customs. Before you arrive, study the list of goods which you may not bring into the UK or which you will have to pay duty or tax on. These are known as goods to declare. If you have goods to declare, follow the red “goods to declare” signs in the customs hall and speak to a Customs Officer. If you have no goods to declare, follow the green “nothing to declare” signs. You may be stopped by a Customs Officer even if you have nothing to declare. You must allow a Customs Officer to examine your baggage if he/she requests this. If you have come from an EU country, go through the blue customs channel. Please DO NOT bring any food into the UK as certain meat ad dairy products are banned.",
    },
    {
      id: "college-arrival",
      title: "Arrival At College",
      content:
        "You will not normally be expected to report to the College on the first day of your arrival unless specifically instructed to do so. You will normally be taken directly to your accommodation where you should find a map and instructions on where to come on your first day at the College. Once at your accommodation you should contact the College on 0208 6981666 to inform us of your arrival. We are open during the hours of 9:00 am and 5.00 pm, Monday to Friday. If you arrive outside of these times you should only contact us in the case of an emergency.",
    },
    {
      id: "climate",
      title: "UK Climate",
      content:
        "The British Climate is unpredictable and it can be very wet and cold for much of the year. You will therefore need to ensure that you have adequate clothing: a warm coat or jacket which is weatherproof, T-shirts or shirts to be worn under warm jumpers, trousers or jeans, warm socks, strong shoes, and an umbrella. For up-to-date weather information please visit the BBC website.",
    },
    {
      id: "medical-items",
      title: "Medical Items",
      content:
        "If you wear spectacles or contacts, bring along a spare pair as well as a copy of your prescription. If you depend on a specific brand of contact lens solution(s), bring a sufficient supply with you. Otherwise, cleaning, rinsing and storage products are available. All prescription drugs should be in labeled containers. Bring a copy of all prescriptions, preferably with generic names. Remedies for common ailments such as colds, coughs and upset stomachs are readily available, but if you have a particular favourite you may wish to bring a small supply with you.",
    },
    {
      id: "medical-service",
      title: "Medical Service",
      content:
        "If your course lasts for six months or more you can get free treatment from the National Health Service (NHS) from the beginning of your stay. This also applies to your spouse and children. We will help you to be registered with the NHS.",
    },
    {
      id: "bank-accounts",
      title: "Bank Accounts",
      content:
        "You cannot open a bank account until you are in the UK and have registered on a programme of full time study. It can take up to 2 weeks to open a bank account. UK law requires banks to make detailed checks on customers to establish proof of identity (signed passport), proof of address in home country and proof of new address in the UK. Once again, our student welfare officer will help you to open a bank account.",
    },
    {
      id: "mobile-phones",
      title: "Mobile Phones",
      content:
        "Many students find mobile phones a convenient way of keeping in touch with family and friends. There are many different companies offering a wide variety of deals, so you will need to shop around. In order to buy a mobile you will need documents to show that you are a student plus proof of your address. The main mobile telephone networks in the UK are: Orange, Vodafone, T-Mobile, Virgin Mobile, Please visit the individual provider’s website for further information.",
    },
    {
      id: "tv-licenses",
      title: "Television Licenses",
      content:
        "If you buy or rent a television, you must obtain a television licence e. A television licence can be bought from any post office, and the current cost is £135.50. It is an offence not to have a TV Licence and use of a television without a licence carries a large fine.",
    },
    {
      id: "safety",
      title: "Personal Safety",
      content:
        "By international standards the UK is a safe country, with low levels of violence and street crime. The Home Office and the police are working together to make all students less vulnerable to crime while they are studying in the UK and have prepared a guide for international students coming to the UK, containing useful advice and information on personal safety. Click here to download the leaflet. http://www.educationuk.org/downloads/safety_1st.pdf",
    },
    {
      id: "electrical",
      title: "Electrical Goods",
      content:
        "The electricity supply in the UK is 240 volts alternating at a frequency of 50 Hertz and most buildings are equipped with sockets which take a 13 Amp, 3 pin plug. If you intend to bring any electrical equipment with you, you should check whether you can use it in the UK . You can purchase adapters in the UK but please note, it is dangerous to overload sockets with too many adapters. You should never use a 2 pin plug in a 3 pin socket.",
    },
    {
      id: "police-registration",
      title: "Police Registration",
      content:
        "Certain nationalities will be required to register with the police. This will be indicated on your visa.",
    },
    {
      id: "food",
      title: "Food",
      content:
        "The cost of food based on a western style breakfast, hot evening meal, plus a light midday meal is likely to be £30-£40 per week. There are a great many food shops for buying food and a hot meal ranges from £3.50-£5.00. There are supermarkets and street markets all around London including international supermarkets and shops selling halal products. But if you cook yourself, you can save money.",
    },
    {
      id: "explore-london",
      title: "Explore London",
      content:
        "Living in the heart of London you can easily explore the city’s many museums and galleries, visit theatres and music venues browse famous open-air markets and relax in one of the parks or countless restaurants, bars and cafes.",
    },
    {
      id: "cars-driving",
      title: "Cars And Driving",
      content:
        "To drive a car or motorcycle in Britain, you must have a valid licence and you must be at least 17 years old (16 for driving a moped). The car must also be registered and taxed and if it is over one year old, it must have a MOT certificate.During your first year in Britain, you may use your own overseas driving licence or an International Driving Permit. If you stay in Britain for more than one year, unless you are from EEA, you will have to apply for a British provisional licence (application forms available from any post office) and retake a driving test. If you are driving on a provisional licence, you will have to abide by the following rules: Display ‘L’ plates on your car or motorcycle, Not drive a car without being accompanied by someone who has full driving licence, Learn the British Highway Code; and In order to obtain a full licence, take a driving test.",
    },
    {
      id: "shopping",
      title: "Shopping And Consumer Rights",
      content:
        "High streets in most areas of London as well as towns outside London, have a wide range of individual shops and chain stores which cater for most everyday needs. For food, the supermarket chains all offer a variety of food and other goods. Most will have international food sections where you will be able to find many familiar items from home. London also has many street markets where you can buy cheaply priced food, household goods, clothing and much more. Check out Camden Market, Portobello, and Spitalfields. Shopping Centres, Malls and Hypermarkets have been built in the suburbs of London. In general shop opening times are generally 9am-5.30pm but Shopping Centres are often open till 8pm in the evening Mon-Saturday. Sundays from 11am-5pm. Many supermarkets are open 24hrs. Small local shops often stay open late. Chemist shops usually work to a rota system so that there is always one open in each area for emergency supplies",
    },
    {
      id: "cultural-awareness",
      title: "Cultural Awareness",
      content:
        "The United Kingdom is a diverse and multi-ethnic society, where students of all backgrounds are welcome and their involvement in local communities is valued. The UK is made up of three different countries and a province: England, Scotland, Wales and the province of Northern Ireland. These countries all have very different characters and identities. The UK is known for having a multicultural society with all religions and faiths represented in some way. With a racial, ethnic and religious jumble, the UK is very open to new traditions and cultures – something that is a great thing for students from other countries! All this diversity means that, when you come to the UK, you will find it easy to settle in. You will also develop an enhanced understanding of different cultures by meeting others from an enormous variety of religious and national backgrounds.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            ← Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Pre Arrival Information
          </h1>
          <p className="text-lg text-white/90">
            Greetings To All Our International Students! The information below
            is to help you prepare for your journey to the UK.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to the UK!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our student welfare office is committed to providing help and
              support for international students as well as accurate information
              and guidance. We aim to ensure the best possible service from the
              moment you apply to the College until you leave. The following
              information may help you to get ready before departure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You will also find basic information about traveling to the UK and
              what to expect on arrival, along with details about some of the
              welcome services available to all new international students.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Information Topics
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 text-left">
                    {faq.title}
                  </h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-[#D04418] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need More Help?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our student welfare office is here to support you every step of the
            way.
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
