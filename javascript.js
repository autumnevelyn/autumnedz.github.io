const links = [
  'https://www.twitch.tv/kandaem/clip/EnthusiasticSnappyScorpionResidentSleeper?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SteamyGentleCormorantItsBoshyTime?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/StrongCallousBottleSwiftRage?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PopularProtectivePuffinEagleEye?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ThankfulDeafCurlewTakeNRG?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/CredulousGleamingCucumberChocolateRain?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ShyFurryLionBIRB?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/BeautifulMiniatureRedpandaCorgiDerp?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/OilyClearMarjoramWow?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/AffluentColdGerbilNomNom?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ShyAmazonianCrabsPastaThat?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SoftIntelligentJaguarCorgiDerp?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SquareGoldenBasenjiOpieOP?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/EnthusiasticIcyDurianThunBeast?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/EsteemedScaryPresidentDeIlluminati?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PlausibleFairFungusNinjaGrumpy?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ConcernedSlickPheasantDeIlluminati-GwikQd5-8p0BWuic?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/BrightBoredPoultryCeilingCat?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/AdorableResilientSageDancingBanana?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/TacitPowerfulIcecreamCeilingCat?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/MoistPatientSnoodDogFace?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/RudeBlatantMeerkatDAESuppy?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ShakingBlatantHamsterPastaThat?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/StylishMiniatureEyeballPJSalt?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PrettyGorgeousSashimiPJSugar?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ShinyIncredulousCucumberSpicyBoy?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/BombasticSaltyCoffeePeanutButterJellyTime-ly8ug0F0m2qKXX6Q?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/EmpathicSassyHummingbirdDatSheffy?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/LaconicOnerousJamShadyLulu-9GjZtHSi_za6O-iL?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ColdHandsomeMangoStoneLightning?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SplendidFurtiveApeOptimizePrime-ZteJvotHY0sllyPB?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/InquisitiveSweetConsoleSoBayed?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/BelovedSourKaleTakeNRG-8ddGjhXtdOR3ELGM?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/DreamyBraveNuggetsBIRB?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/StupidPolishedCucumberCurseLit?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/FreezingToughAlmondOpieOP-1R_dDRIhLDuURehI?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SneakyCrispyAlpacaPeteZaroll?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/FairGiantCormorantWutFace-AbkEM1zLree9OlsT?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SquareRelentlessFiddleheadsTwitchRaid-QXEhjSgmnvVe0KQr?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/IronicVictoriousMomRuleFive?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/HyperInterestingGarageHeyGuys?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/StormyHotAniseAMPTropPunch?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/FastTriangularTurtleVoHiYo?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ThankfulSaltyLionMikeHogu?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/CallousDistinctDunlinSMOrc?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PlausibleTemperedShrewFloof?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ObeseAbstruseDragonflyEagleEye-1Lt7j7I03RLLuB-0?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/BloodyEvilCrabsANELE?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/InspiringColorfulWolfPanicBasket?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ViscousTolerantEelBigBrother?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SpeedyModernHyenaAMPTropPunch-ULfcUf5c1WwwVFD9?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ConfidentRoundSparrowResidentSleeper-C0nJPe3ikLG_rdua?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/KathishBillowingSangKappa?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/LuckyCheerfulBeeHeyGuys?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SullenSincereFriseeBuddhaBar?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/SecretiveLachrymoseShallotCoolStoryBob?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PatientNaiveChickenDendiFace?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/UnusualScrumptiousLobsterPJSugar-rjT76AMvq5ZtFjh_?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/MildAlluringMangetoutShadyLulu?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/HotSuaveEyeballPrimeMe?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/AstuteHonorableBeanUnSane?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/VivaciousSpoopyAlmondSaltBae-7G41G7JoTTiVgdtw?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/CalmDeterminedClipzDoubleRainbow?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/RenownedFurtiveWrenchPhilosoraptor-IzZ4FdbxWqzFaAW3?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/MoistDeafNewtPunchTrees?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/AliveFrigidAlbatrossBudStar?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/WealthyCarelessMochaPastaThat?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/OnerousDistinctWerewolfTBTacoRight-xgYGm0TD8W_Zj3Kb?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/CalmCrowdedAnacondaStinkyCheese-823KM6hA0MBumUaW?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PluckyFurtiveNoodleBloodTrail?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/JollyAgreeableBarracudaVoteYea?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/UglySneakyLionTooSpicy?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/AmazonianFrigidFiddleheadsBabyRage?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/ShinyPunchySoymilkDancingBaby-zn_bIk1crYm72HOi?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/PrettyDreamyHyenaBleedPurple-iVjtoGhVJXxpl7QO?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/MistyStupidCrowFunRun-S1ITDmAj7X0KlMtD?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/BrightPeppyButterflyFunRun-VfwCufsXz77hJiCn?filter=clips&range=all&sort=time',
  'https://www.twitch.tv/kandaem/clip/FantasticBrightSalmonPeteZaroll-PEsAhvV8gfYKocyR?filter=clips&range=all&sort=time'
]

const getRandomLink = () =>{
  const randomIndex = Math.floor(Math.random() * links.length)
  console.log('index: ', randomIndex)
  console.log('link: ', links[randomIndex])
  document.documentElement.innerHTML = links[randomIndex]
}
