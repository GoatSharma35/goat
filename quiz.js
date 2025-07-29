
// Quiz system with 4200 questions (14 types × 3 levels × 100 questions each)
class QuizSystem {
  constructor() {
    this.currentQuiz = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];
    this.quizQuestions = [];
    this.usedQuestionIds = new Set(); // Track used questions
    this.initializeQuestions();
    this.setupEventListeners();
  }

  initializeQuestions() {
    // Generate 4200 questions: 14 injury types × 3 difficulty levels × 100 questions each
    this.questions = {
      cuts: {
        beginner: this.generateCutsQuestions('beginner', 100),
        intermediate: this.generateCutsQuestions('intermediate', 100),
        advanced: this.generateCutsQuestions('advanced', 100)
      },
      burns: {
        beginner: this.generateBurnsQuestions('beginner', 100),
        intermediate: this.generateBurnsQuestions('intermediate', 100),
        advanced: this.generateBurnsQuestions('advanced', 100)
      },
      sprains: {
        beginner: this.generateStrainsQuestions('beginner', 100),
        intermediate: this.generateStrainsQuestions('intermediate', 100),
        advanced: this.generateStrainsQuestions('advanced', 100)
      },
      fractures: {
        beginner: this.generateFracturesQuestions('beginner', 100),
        intermediate: this.generateFracturesQuestions('intermediate', 100),
        advanced: this.generateFracturesQuestions('advanced', 100)
      },
      choking: {
        beginner: this.generateChokingQuestions('beginner', 100),
        intermediate: this.generateChokingQuestions('intermediate', 100),
        advanced: this.generateChokingQuestions('advanced', 100)
      },
      nosebleeds: {
        beginner: this.generateNosebleedsQuestions('beginner', 100),
        intermediate: this.generateNosebleedsQuestions('intermediate', 100),
        advanced: this.generateNosebleedsQuestions('advanced', 100)
      },
      'eye-injuries': {
        beginner: this.generateEyeInjuriesQuestions('beginner', 100),
        intermediate: this.generateEyeInjuriesQuestions('intermediate', 100),
        advanced: this.generateEyeInjuriesQuestions('advanced', 100)
      },
      'insect-bites': {
        beginner: this.generateInsectBitesQuestions('beginner', 100),
        intermediate: this.generateInsectBitesQuestions('intermediate', 100),
        advanced: this.generateInsectBitesQuestions('advanced', 100)
      },
      cpr: {
        beginner: this.generateCPRQuestions('beginner', 100),
        intermediate: this.generateCPRQuestions('intermediate', 100),
        advanced: this.generateCPRQuestions('advanced', 100)
      },
      'first-aid-supplies': {
        beginner: this.generateFirstAidSuppliesQuestions('beginner', 100),
        intermediate: this.generateFirstAidSuppliesQuestions('intermediate', 100),
        advanced: this.generateFirstAidSuppliesQuestions('advanced', 100)
      },
      allergies: {
        beginner: this.generateAllergiesQuestions('beginner', 100),
        intermediate: this.generateAllergiesQuestions('intermediate', 100),
        advanced: this.generateAllergiesQuestions('advanced', 100)
      },
      'breathing-problems': {
        beginner: this.generateBreathingProblemsQuestions('beginner', 100),
        intermediate: this.generateBreathingProblemsQuestions('intermediate', 100),
        advanced: this.generateBreathingProblemsQuestions('advanced', 100)
      },
      poisoning: {
        beginner: this.generatePoisoningQuestions('beginner', 100),
        intermediate: this.generatePoisoningQuestions('intermediate', 100),
        advanced: this.generatePoisoningQuestions('advanced', 100)
      },
      'heat-cold-exposure': {
        beginner: this.generateHeatColdQuestions('beginner', 100),
        intermediate: this.generateHeatColdQuestions('intermediate', 100),
        advanced: this.generateHeatColdQuestions('advanced', 100)
      }
    };
  }

  generateCutsQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the first step when treating a minor cut?",
        options: ["Apply pressure", "Clean your hands", "Apply bandage", "Use antiseptic"],
        correct: 1,
        topic: "initial_treatment"
      },
      {
        question: "How should you clean a cut?",
        options: ["With alcohol", "With hydrogen peroxide", "With clean water", "With soap directly on wound"],
        correct: 2,
        topic: "cleaning"
      },
      {
        question: "When should you seek medical attention for a cut?",
        options: ["If it's bleeding", "If it's deeper than 1/4 inch", "If it's on your hand", "If it stings"],
        correct: 1,
        topic: "medical_attention"
      },
      {
        question: "What should you do if a cut won't stop bleeding?",
        options: ["Remove bandage to check", "Apply more pressure", "Use ice", "Elevate and apply pressure"],
        correct: 3,
        topic: "bleeding_control"
      },
      {
        question: "How often should you change a bandage on a cut?",
        options: ["Once a week", "Never", "Daily or when dirty", "Only if infected"],
        correct: 2,
        topic: "bandage_care"
      },
      {
        question: "What type of cut requires stitches?",
        options: ["Any bleeding cut", "Cuts deeper than skin", "Only facial cuts", "Cuts longer than 1 inch"],
        correct: 1,
        topic: "stitches"
      },
      {
        question: "Which antiseptic is safest for cleaning cuts?",
        options: ["Rubbing alcohol", "Hydrogen peroxide", "Iodine solution", "Soap and water"],
        correct: 3,
        topic: "antiseptic"
      },
      {
        question: "What should you do if glass is embedded in a cut?",
        options: ["Remove it immediately", "Leave it and bandage around", "Push it deeper", "Rinse with water"],
        correct: 1,
        topic: "embedded_objects"
      },
      {
        question: "How long should you apply direct pressure to stop bleeding?",
        options: ["30 seconds", "2-3 minutes", "10-15 minutes", "Until paramedics arrive"],
        correct: 2,
        topic: "pressure_duration"
      },
      {
        question: "What indicates a cut is becoming infected?",
        options: ["Light pink coloring", "Increased redness and warmth", "Slight tenderness", "Clear drainage"],
        correct: 1,
        topic: "infection_signs"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'cuts');
  }

  generateBurnsQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the first step for treating a burn?",
        options: ["Apply ice", "Apply butter", "Cool with water", "Apply bandage"],
        correct: 2,
        topic: "initial_treatment"
      },
      {
        question: "How long should you cool a burn with water?",
        options: ["30 seconds", "2 minutes", "10-20 minutes", "1 hour"],
        correct: 2,
        topic: "cooling_duration"
      },
      {
        question: "What degree burn affects all skin layers?",
        options: ["First degree", "Second degree", "Third degree", "Fourth degree"],
        correct: 2,
        topic: "burn_classification"
      },
      {
        question: "What should you never put on a burn?",
        options: ["Water", "Clean cloth", "Ice or butter", "Loose bandage"],
        correct: 2,
        topic: "contraindications"
      },
      {
        question: "How do you treat a chemical burn?",
        options: ["Apply neutralizing agent", "Flush with water for 20 minutes", "Cover immediately", "Apply ice"],
        correct: 1,
        topic: "chemical_burns"
      },
      {
        question: "What size burn requires emergency care?",
        options: ["Any burn", "Burns larger than your palm", "Burns on hands only", "Only blistering burns"],
        correct: 1,
        topic: "emergency_criteria"
      },
      {
        question: "How should you remove clothing from a burn victim?",
        options: ["Pull it off quickly", "Cut around stuck fabric", "Soak first", "Leave all clothing on"],
        correct: 1,
        topic: "clothing_removal"
      },
      {
        question: "What type of burn appears white or charred?",
        options: ["First degree", "Second degree", "Third degree", "Sunburn"],
        correct: 2,
        topic: "burn_appearance"
      },
      {
        question: "Should you pop burn blisters?",
        options: ["Always", "Only large ones", "Never", "Only if painful"],
        correct: 2,
        topic: "blister_care"
      },
      {
        question: "What pain level indicates a serious burn?",
        options: ["Severe pain", "Moderate pain", "Little to no pain", "Throbbing pain"],
        correct: 2,
        topic: "pain_assessment"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'burns');
  }

  generateStrainsQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What does RICE stand for in sprain treatment?",
        options: ["Rest, Ice, Care, Elevate", "Rest, Ice, Compression, Elevation", "Relax, Ice, Compress, Exercise", "Rest, Immobilize, Cool, Elevate"],
        correct: 1,
        topic: "rice_protocol"
      },
      {
        question: "How long should you apply ice to a sprain?",
        options: ["5 minutes", "15-20 minutes", "1 hour", "Until numb"],
        correct: 1,
        topic: "ice_duration"
      },
      {
        question: "What's the difference between a sprain and strain?",
        options: ["No difference", "Sprain affects ligaments, strain affects muscles", "Strain is more serious", "Sprain occurs in arms only"],
        correct: 1,
        topic: "sprain_vs_strain"
      },
      {
        question: "When should you seek medical attention for a sprain?",
        options: ["Immediately", "If you can't bear weight", "After 24 hours", "Never"],
        correct: 1,
        topic: "medical_attention"
      },
      {
        question: "How tight should compression bandaging be?",
        options: ["Very tight", "Snug but not cutting circulation", "Loose", "As tight as possible"],
        correct: 1,
        topic: "compression_technique"
      },
      {
        question: "How high should you elevate a sprained ankle?",
        options: ["Below heart level", "At heart level", "Above heart level", "Height doesn't matter"],
        correct: 2,
        topic: "elevation"
      },
      {
        question: "What indicates a severe ankle sprain?",
        options: ["Mild pain", "Cannot bear weight", "Slight swelling", "Some stiffness"],
        correct: 1,
        topic: "severity_assessment"
      },
      {
        question: "Should you use heat on a fresh sprain?",
        options: ["Yes, immediately", "No, use ice first 48 hours", "Alternate heat and ice", "Heat is always better"],
        correct: 1,
        topic: "heat_vs_ice"
      },
      {
        question: "What's the proper way to wrap a sprained wrist?",
        options: ["Very tightly", "Start at fingers, wrap toward elbow", "Only around wrist", "Loose figure-8 pattern"],
        correct: 3,
        topic: "wrapping_technique"
      },
      {
        question: "How long does a typical ankle sprain take to heal?",
        options: ["1-2 days", "1-2 weeks", "2-6 weeks", "6 months"],
        correct: 2,
        topic: "healing_time"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'sprains');
  }

  generateFracturesQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the most important thing when suspecting a fracture?",
        options: ["Apply ice", "Immobilize the area", "Give pain medication", "Move to test"],
        correct: 1,
        topic: "immobilization"
      },
      {
        question: "What's the difference between open and closed fractures?",
        options: ["Severity level", "Bone breaks through skin vs doesn't", "Location of break", "Pain level"],
        correct: 1,
        topic: "fracture_types"
      },
      {
        question: "How should you immobilize a suspected arm fracture?",
        options: ["Let it hang loose", "Use a sling", "Tape to body", "Apply tight bandage"],
        correct: 1,
        topic: "arm_immobilization"
      },
      {
        question: "What are signs of a possible fracture?",
        options: ["Pain only", "Swelling and deformity", "Bruising only", "Stiffness"],
        correct: 1,
        topic: "fracture_signs"
      },
      {
        question: "Should you try to straighten a deformed limb?",
        options: ["Yes, always", "Only if trained", "Never", "Only if it's not bleeding"],
        correct: 2,
        topic: "deformity_handling"
      },
      {
        question: "What should you do for an open fracture?",
        options: ["Push bone back in", "Cover with sterile dressing", "Clean the wound", "Apply pressure to bone"],
        correct: 1,
        topic: "open_fracture_care"
      },
      {
        question: "How do you make an improvised splint?",
        options: ["Use only medical supplies", "Any rigid material longer than break", "Wrap tightly with cloth", "Use elastic bandages only"],
        correct: 1,
        topic: "splinting"
      },
      {
        question: "What indicates possible spinal fracture?",
        options: ["Back pain", "Numbness or paralysis", "Headache", "Dizziness"],
        correct: 1,
        topic: "spinal_fractures"
      },
      {
        question: "Should you give water to someone with a fracture?",
        options: ["Yes, always", "No, they may need surgery", "Only small sips", "Only if thirsty"],
        correct: 1,
        topic: "oral_intake"
      },
      {
        question: "How do you check circulation below a fracture?",
        options: ["Feel for pulse", "Check skin color and temperature", "Press nail and check refill", "All of the above"],
        correct: 3,
        topic: "circulation_check"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'fractures');
  }

  generateChokingQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the universal sign for choking?",
        options: ["Pointing to throat", "Hands on throat", "Waving arms", "Coughing loudly"],
        correct: 1,
        topic: "choking_signs"
      },
      {
        question: "When should you perform the Heimlich maneuver?",
        options: ["If person is coughing", "If person cannot speak or breathe", "Immediately", "After calling 911"],
        correct: 1,
        topic: "heimlich_timing"
      },
      {
        question: "Where do you place your hands for the Heimlich maneuver?",
        options: ["On the chest", "Below the rib cage", "On the back", "On the throat"],
        correct: 1,
        topic: "hand_placement"
      },
      {
        question: "How do you help a choking infant?",
        options: ["Heimlich maneuver", "Back blows and chest thrusts", "Turn upside down", "Finger sweep"],
        correct: 1,
        topic: "infant_choking"
      },
      {
        question: "What should you do if a choking person becomes unconscious?",
        options: ["Continue Heimlich", "Start CPR", "Give back blows", "Wait for help"],
        correct: 1,
        topic: "unconscious_choking"
      },
      {
        question: "How many back blows should you give before abdominal thrusts?",
        options: ["None", "5", "10", "Until object comes out"],
        correct: 1,
        topic: "back_blows"
      },
      {
        question: "Can you perform Heimlich on a pregnant woman?",
        options: ["Yes, normally", "No, never", "Yes, but chest thrusts instead", "Only in emergencies"],
        correct: 2,
        topic: "pregnancy_choking"
      },
      {
        question: "What should you avoid when someone is coughing but can speak?",
        options: ["Calling 911", "Back slaps", "Encouraging coughing", "Heimlich maneuver"],
        correct: 3,
        topic: "partial_obstruction"
      },
      {
        question: "How do you perform self-Heimlich?",
        options: ["Can't be done", "Use chair back or table edge", "Hit your own back", "Drink water"],
        correct: 1,
        topic: "self_heimlich"
      },
      {
        question: "After successful Heimlich, what should you do?",
        options: ["Nothing more needed", "Seek medical evaluation", "Give water", "Have them rest"],
        correct: 1,
        topic: "post_heimlich_care"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'choking');
  }

  generateNosebleedsQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What position should someone be in during a nosebleed?",
        options: ["Lying down", "Head back", "Leaning forward", "Standing up"],
        correct: 2,
        topic: "positioning"
      },
      {
        question: "Where should you pinch to stop a nosebleed?",
        options: ["Bridge of nose", "Soft part of nose", "Nostrils", "Under nose"],
        correct: 1,
        topic: "pinching_location"
      },
      {
        question: "How long should you pinch the nose for a nosebleed?",
        options: ["1-2 minutes", "5-10 minutes", "15 minutes", "Until it stops"],
        correct: 1,
        topic: "pinching_duration"
      },
      {
        question: "What causes most nosebleeds?",
        options: ["High blood pressure", "Dry air and nose picking", "Blood disorders", "Head trauma"],
        correct: 1,
        topic: "causes"
      },
      {
        question: "When should you seek medical attention for a nosebleed?",
        options: ["Immediately", "After 20 minutes", "If it won't stop after 20 minutes", "Never"],
        correct: 2,
        topic: "medical_attention"
      },
      {
        question: "What should you avoid doing during a nosebleed?",
        options: ["Pinching nose", "Leaning forward", "Swallowing blood", "Applying pressure"],
        correct: 2,
        topic: "what_to_avoid"
      },
      {
        question: "Should you use ice for a nosebleed?",
        options: ["Never", "Ice on nose bridge", "Ice inside nose", "Ice on forehead only"],
        correct: 1,
        topic: "ice_use"
      },
      {
        question: "What indicates a serious nosebleed?",
        options: ["Any bleeding", "Heavy flow with clots", "Light spotting", "Occasional drips"],
        correct: 1,
        topic: "severity_assessment"
      },
      {
        question: "How can you prevent nosebleeds?",
        options: ["Avoid exercise", "Keep nasal passages moist", "Blow nose forcefully", "Use decongestants daily"],
        correct: 1,
        topic: "prevention"
      },
      {
        question: "What should you do after a nosebleed stops?",
        options: ["Blow nose immediately", "Avoid nose blowing for hours", "Insert tissue", "Clean vigorously"],
        correct: 1,
        topic: "post_bleed_care"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'nosebleeds');
  }

  generateEyeInjuriesQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What should you do if something is stuck in someone's eye?",
        options: ["Remove it immediately", "Flush with water", "Do not remove it", "Rub the eye"],
        correct: 2,
        topic: "foreign_objects"
      },
      {
        question: "How should you flush chemicals from an eye?",
        options: ["With saline solution", "With clean water for 15 minutes", "With milk", "Don't flush"],
        correct: 1,
        topic: "chemical_exposure"
      },
      {
        question: "What should you do for a black eye?",
        options: ["Apply heat", "Apply ice wrapped in cloth", "Rub it", "Apply pressure"],
        correct: 1,
        topic: "black_eye"
      },
      {
        question: "How do you protect an eye with an embedded object?",
        options: ["Remove object first", "Cover both eyes", "Secure object and cover", "Apply pressure around it"],
        correct: 2,
        topic: "embedded_objects"
      },
      {
        question: "What should you never do to an injured eye?",
        options: ["Cover it", "Apply pressure", "Seek medical help", "Keep it clean"],
        correct: 1,
        topic: "contraindications"
      },
      {
        question: "How do you make an eye patch?",
        options: ["Use adhesive bandage", "Gauze pad taped lightly", "Wrap around head", "Use cloth strip"],
        correct: 1,
        topic: "eye_patching"
      },
      {
        question: "What indicates a serious eye injury?",
        options: ["Mild tearing", "Vision changes or loss", "Slight redness", "Normal blinking"],
        correct: 1,
        topic: "serious_injury_signs"
      },
      {
        question: "How should you position someone with an eye injury?",
        options: ["Lying flat", "Sitting upright", "Head elevated", "On their side"],
        correct: 2,
        topic: "positioning"
      },
      {
        question: "What type of eye injury requires immediate 911 call?",
        options: ["Minor scratch", "Sudden vision loss", "Watery eye", "Mild irritation"],
        correct: 1,
        topic: "emergency_criteria"
      },
      {
        question: "Should you remove contact lenses after eye injury?",
        options: ["Always immediately", "Never", "Only if trained", "Only if painful"],
        correct: 2,
        topic: "contact_lenses"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'eye-injuries');
  }

  generateInsectBitesQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What should you do first for a bee sting?",
        options: ["Apply ice", "Remove the stinger", "Take antihistamine", "Wash the area"],
        correct: 1,
        topic: "bee_sting_first_aid"
      },
      {
        question: "How should you remove a bee stinger?",
        options: ["With tweezers", "Scrape it off", "Squeeze it out", "Leave it alone"],
        correct: 1,
        topic: "stinger_removal"
      },
      {
        question: "What are signs of an allergic reaction to insect bites?",
        options: ["Local swelling", "Difficulty breathing", "Mild pain", "Small bump"],
        correct: 1,
        topic: "allergic_reactions"
      },
      {
        question: "How do you treat a tick bite?",
        options: ["Burn it off", "Use tweezers to pull straight out", "Apply petroleum jelly", "Wait for it to fall off"],
        correct: 1,
        topic: "tick_removal"
      },
      {
        question: "What should you apply to reduce itching from insect bites?",
        options: ["Heat", "Cold compress", "Hot water", "Alcohol"],
        correct: 1,
        topic: "itch_relief"
      },
      {
        question: "Which insect bite can transmit disease?",
        options: ["Mosquito", "Tick", "Spider", "All of the above"],
        correct: 3,
        topic: "disease_transmission"
      },
      {
        question: "What indicates a spider bite may be dangerous?",
        options: ["Any swelling", "Severe pain and tissue death", "Mild redness", "Small puncture"],
        correct: 1,
        topic: "dangerous_bites"
      },
      {
        question: "How long should you monitor someone after an insect sting?",
        options: ["5 minutes", "30 minutes", "2 hours", "24 hours"],
        correct: 1,
        topic: "monitoring_time"
      },
      {
        question: "What's the best prevention for insect bites?",
        options: ["Stay indoors", "Insect repellent and protective clothing", "Take antihistamines", "Use citronella"],
        correct: 1,
        topic: "prevention"
      },
      {
        question: "When should you seek emergency care for an insect bite?",
        options: ["Always", "If there's swelling", "If there's difficulty breathing", "Never"],
        correct: 2,
        topic: "emergency_care"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'insect-bites');
  }

  generateCPRQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the correct compression rate for CPR?",
        options: ["60-80 per minute", "100-120 per minute", "140-160 per minute", "As fast as possible"],
        correct: 1,
        topic: "compression_rate"
      },
      {
        question: "How deep should chest compressions be for adults?",
        options: ["1 inch", "At least 2 inches", "3 inches", "As deep as possible"],
        correct: 1,
        topic: "compression_depth"
      },
      {
        question: "What is the compression to breath ratio for adult CPR?",
        options: ["15:2", "30:2", "5:1", "10:2"],
        correct: 1,
        topic: "compression_ratio"
      },
      {
        question: "Where should you place your hands for chest compressions?",
        options: ["Upper chest", "Lower chest", "Center of chest on breastbone", "Left side of chest"],
        correct: 2,
        topic: "hand_placement"
      },
      {
        question: "What should you do before starting CPR?",
        options: ["Check for pulse", "Check for responsiveness", "Call 911", "All of the above"],
        correct: 3,
        topic: "before_cpr"
      },
      {
        question: "How do you open an airway for rescue breathing?",
        options: ["Lift chin", "Tilt head back, lift chin", "Turn head to side", "Leave as found"],
        correct: 1,
        topic: "airway_opening"
      },
      {
        question: "When should you stop CPR?",
        options: ["After 5 minutes", "When you're tired", "When EMS arrives or person responds", "Never"],
        correct: 2,
        topic: "stopping_cpr"
      },
      {
        question: "What's different about infant CPR?",
        options: ["Same as adult", "Use two fingers", "Faster compressions", "No rescue breathing"],
        correct: 1,
        topic: "infant_cpr"
      },
      {
        question: "Should you perform CPR if you feel a weak pulse?",
        options: ["Yes", "No", "Only if unconscious", "Ask someone else to check"],
        correct: 1,
        topic: "pulse_considerations"
      },
      {
        question: "What increases CPR effectiveness?",
        options: ["Minimizing interruptions", "Switching compressors every 2 minutes", "Quality compressions", "All of the above"],
        correct: 3,
        topic: "cpr_effectiveness"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'cpr');
  }

  generateFirstAidSuppliesQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the most important item in a first aid kit?",
        options: ["Bandages", "Antiseptic", "Gloves", "Thermometer"],
        correct: 2,
        topic: "essential_items"
      },
      {
        question: "How often should you check your first aid kit?",
        options: ["Monthly", "Every 6 months", "Yearly", "When something is used"],
        correct: 1,
        topic: "kit_maintenance"
      },
      {
        question: "What size bandages are most versatile?",
        options: ["Small", "Medium", "Large", "Assorted sizes"],
        correct: 3,
        topic: "bandage_types"
      },
      {
        question: "What should you include for burns in your first aid kit?",
        options: ["Ice packs", "Burn gel", "Butter", "Oils"],
        correct: 1,
        topic: "burn_supplies"
      },
      {
        question: "Which medication is safe to include in a basic first aid kit?",
        options: ["Prescription painkillers", "Over-counter pain relievers", "Antibiotics", "Insulin"],
        correct: 1,
        topic: "medications"
      },
      {
        question: "Why are disposable gloves important in first aid?",
        options: ["Keep hands clean", "Prevent infection", "Look professional", "Required by law"],
        correct: 1,
        topic: "infection_control"
      },
      {
        question: "What tool helps remove splinters?",
        options: ["Scissors", "Tweezers", "Safety pins", "Needle"],
        correct: 1,
        topic: "splinter_removal"
      },
      {
        question: "How should you store your first aid kit?",
        options: ["In freezer", "Cool, dry place", "Hot car", "Bathroom"],
        correct: 1,
        topic: "storage"
      },
      {
        question: "What information should be in your first aid kit?",
        options: ["Emergency contact numbers", "Medical history", "Insurance cards", "All of the above"],
        correct: 3,
        topic: "information_cards"
      },
      {
        question: "What's the difference between sterile and non-sterile gauze?",
        options: ["No difference", "Sterile is for open wounds", "Non-sterile is better", "Color coding"],
        correct: 1,
        topic: "gauze_types"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'first-aid-supplies');
  }

  generateAllergiesQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the emergency medication for severe allergic reactions?",
        options: ["Antihistamine", "EpiPen", "Aspirin", "Inhaler"],
        correct: 1,
        topic: "emergency_medication"
      },
      {
        question: "Where should an EpiPen be injected?",
        options: ["Arm", "Outer thigh", "Chest", "Stomach"],
        correct: 1,
        topic: "injection_site"
      },
      {
        question: "How long should you hold an EpiPen in place?",
        options: ["1 second", "3 seconds", "10 seconds", "30 seconds"],
        correct: 1,
        topic: "injection_duration"
      },
      {
        question: "What should you do after using an EpiPen?",
        options: ["Wait and see", "Call 911", "Give another dose", "Apply ice"],
        correct: 1,
        topic: "post_epipen_care"
      },
      {
        question: "What are signs of anaphylaxis?",
        options: ["Mild rash", "Difficulty breathing and swelling", "Stomach ache", "Headache"],
        correct: 1,
        topic: "anaphylaxis_signs"
      },
      {
        question: "How fast can anaphylaxis develop?",
        options: ["Hours", "Minutes", "Days", "Weeks"],
        correct: 1,
        topic: "reaction_timing"
      },
      {
        question: "What position is best for someone in anaphylactic shock?",
        options: ["Sitting up", "Lying flat with legs elevated", "On their side", "Standing"],
        correct: 1,
        topic: "positioning"
      },
      {
        question: "Can anaphylaxis occur from food allergies?",
        options: ["Never", "Yes, commonly", "Only in children", "Very rarely"],
        correct: 1,
        topic: "food_allergies"
      },
      {
        question: "What should you do if someone has allergic symptoms but no EpiPen?",
        options: ["Wait it out", "Call 911 and give antihistamine", "Drive to hospital", "Give water"],
        correct: 1,
        topic: "no_epipen_available"
      },
      {
        question: "How many EpiPens should someone with severe allergies carry?",
        options: ["One", "Two", "Three", "None needed"],
        correct: 1,
        topic: "epipen_quantity"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'allergies');
  }

  generateBreathingProblemsQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What position is best for someone having trouble breathing?",
        options: ["Lying flat", "Sitting upright", "On their side", "Head down"],
        correct: 1,
        topic: "positioning"
      },
      {
        question: "What should you do if someone is hyperventilating?",
        options: ["Give oxygen", "Have them breathe in paper bag", "Have them breathe slowly", "Call 911 immediately"],
        correct: 2,
        topic: "hyperventilation"
      },
      {
        question: "When should you call 911 for breathing problems?",
        options: ["Always", "If severe or getting worse", "After 10 minutes", "Never"],
        correct: 1,
        topic: "when_to_call_911"
      },
      {
        question: "What should you do if someone stops breathing?",
        options: ["Wait for help", "Start rescue breathing", "Give water", "Slap their back"],
        correct: 1,
        topic: "stopped_breathing"
      },
      {
        question: "How can you help someone with asthma?",
        options: ["Make them lie down", "Help them use their inhaler", "Give them water", "Have them exercise"],
        correct: 1,
        topic: "asthma_attack"
      },
      {
        question: "What indicates severe breathing distress?",
        options: ["Slight shortness of breath", "Blue lips or fingernails", "Talking normally", "Mild wheezing"],
        correct: 1,
        topic: "severe_distress_signs"
      },
      {
        question: "Should you give water to someone having breathing problems?",
        options: ["Yes, always", "No, risk of choking", "Only small sips", "Only ice water"],
        correct: 1,
        topic: "fluids"
      },
      {
        question: "What can trigger an asthma attack?",
        options: ["Exercise only", "Allergens and irritants", "Cold weather only", "Stress only"],
        correct: 1,
        topic: "asthma_triggers"
      },
      {
        question: "How should you help someone having a panic attack with breathing issues?",
        options: ["Tell them to calm down", "Breathe with them slowly", "Leave them alone", "Give medication"],
        correct: 1,
        topic: "panic_attack_breathing"
      },
      {
        question: "What's the rescue breathing rate for adults?",
        options: ["1 breath every 3 seconds", "1 breath every 5-6 seconds", "1 breath every 10 seconds", "As fast as possible"],
        correct: 1,
        topic: "rescue_breathing_rate"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'breathing-problems');
  }

  generatePoisoningQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What should you do first if someone is poisoned?",
        options: ["Make them vomit", "Give water", "Call Poison Control", "Give milk"],
        correct: 2,
        topic: "first_action"
      },
      {
        question: "What is the Poison Control number?",
        options: ["911", "1-800-222-1222", "411", "1-800-POISON"],
        correct: 1,
        topic: "poison_control_number"
      },
      {
        question: "When should you NOT make someone vomit?",
        options: ["Never", "Always make them vomit", "If they swallowed corrosive substance", "If conscious"],
        correct: 2,
        topic: "when_not_to_induce_vomiting"
      },
      {
        question: "What information should you have when calling Poison Control?",
        options: ["Person's age only", "What was taken, when, and how much", "Just the symptoms", "Time of day"],
        correct: 1,
        topic: "information_needed"
      },
      {
        question: "What should you do if poison gets on skin?",
        options: ["Apply lotion", "Rinse with water for 15 minutes", "Cover with bandage", "Let it dry"],
        correct: 1,
        topic: "skin_contamination"
      },
      {
        question: "How do you treat inhaled poison?",
        options: ["Make them vomit", "Get to fresh air", "Give water", "Apply ice"],
        correct: 1,
        topic: "inhaled_poisons"
      },
      {
        question: "What should you save when someone is poisoned?",
        options: ["Nothing", "The poison container", "Their vomit", "Only the container"],
        correct: 1,
        topic: "what_to_save"
      },
      {
        question: "Should you give activated charcoal for poisoning?",
        options: ["Always", "Never", "Only if Poison Control recommends", "For any poison"],
        correct: 2,
        topic: "activated_charcoal"
      },
      {
        question: "What are signs of poisoning?",
        options: ["Nausea and vomiting", "Altered mental state", "Burns around mouth", "All of the above"],
        correct: 3,
        topic: "poisoning_signs"
      },
      {
        question: "How should you remove poison from eyes?",
        options: ["Don't rinse", "Rinse with water for 20 minutes", "Use milk", "Apply ice"],
        correct: 1,
        topic: "eye_contamination"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'poisoning');
  }

  generateHeatColdQuestions(level, count) {
    const baseQuestions = [
      {
        question: "What is the first step for heat exhaustion?",
        options: ["Give cold water", "Move to cool area", "Apply ice", "Give salt tablets"],
        correct: 1,
        topic: "heat_exhaustion_treatment"
      },
      {
        question: "How should you warm someone with hypothermia?",
        options: ["Hot shower", "Heating pad", "Gradual warming", "Vigorous rubbing"],
        correct: 2,
        topic: "hypothermia_warming"
      },
      {
        question: "What are signs of heat stroke?",
        options: ["Sweating heavily", "Hot, dry skin and altered mental state", "Feeling cold", "Shivering"],
        correct: 1,
        topic: "heat_stroke_signs"
      },
      {
        question: "What should you do for frostbite?",
        options: ["Rub the area", "Apply heat directly", "Gradually rewarm", "Break blisters"],
        correct: 2,
        topic: "frostbite_treatment"
      },
      {
        question: "What's the difference between heat exhaustion and heat stroke?",
        options: ["No difference", "Heat stroke is more severe", "Heat exhaustion is worse", "Location affected"],
        correct: 1,
        topic: "heat_illness_differences"
      },
      {
        question: "When is heat/cold exposure an emergency?",
        options: ["Always", "When person is unconscious or confused", "Only if shivering", "Never"],
        correct: 1,
        topic: "emergency_criteria"
      },
      {
        question: "How do you prevent heat-related illness?",
        options: ["Exercise in heat", "Stay hydrated and cool", "Wear dark clothing", "Avoid all activity"],
        correct: 1,
        topic: "heat_prevention"
      },
      {
        question: "What indicates severe hypothermia?",
        options: ["Mild shivering", "Stops shivering, confused", "Feeling cold", "Chattering teeth"],
        correct: 1,
        topic: "severe_hypothermia"
      },
      {
        question: "Should you give alcohol to warm someone up?",
        options: ["Yes, it warms them", "No, it increases heat loss", "Only small amounts", "Only beer"],
        correct: 1,
        topic: "alcohol_warming"
      },
      {
        question: "What body parts get frostbite first?",
        options: ["Arms and legs", "Fingers, toes, nose, ears", "Chest and back", "Head and neck"],
        correct: 1,
        topic: "frostbite_locations"
      }
    ];

    return this.expandQuestions(baseQuestions, count, level, 'heat-cold-exposure');
  }

  expandQuestions(baseQuestions, targetCount, level, category) {
    const questions = [];
    const scenarios = [
      "During a family camping trip",
      "At a workplace accident",
      "In your home kitchen",
      "While hiking in the mountains",
      "At a children's playground",
      "During a sports game",
      "At a school event",
      "While gardening",
      "During a picnic",
      "At the beach"
    ];

    const contexts = [
      "emergency situation",
      "training scenario",
      "real-life incident",
      "practice drill",
      "actual emergency",
      "simulation exercise",
      "field experience",
      "hands-on situation",
      "critical moment",
      "urgent scenario"
    ];

    const questionStarters = [
      "What is the correct procedure for",
      "How would you handle",
      "What should be your priority when dealing with",
      "In case of",
      "When faced with",
      "What is the best approach for",
      "How do you properly treat",
      "What steps should you take for",
      "What is the recommended action for",
      "How should you respond to"
    ];

    for (let i = 0; i < targetCount; i++) {
      const baseIndex = i % baseQuestions.length;
      const scenarioIndex = Math.floor(i / baseQuestions.length) % scenarios.length;
      const contextIndex = Math.floor(i / (baseQuestions.length * scenarios.length)) % contexts.length;
      const starterIndex = Math.floor(i / (baseQuestions.length * scenarios.length * contexts.length)) % questionStarters.length;
      
      const baseQuestion = baseQuestions[baseIndex];
      const scenario = scenarios[scenarioIndex];
      const context = contexts[contextIndex];
      const starter = questionStarters[starterIndex];
      
      let questionText = baseQuestion.question;
      
      // Create different variations based on the iteration
      const variationType = i % 4;
      switch (variationType) {
        case 0:
          questionText = baseQuestion.question;
          break;
        case 1:
          questionText = `${scenario}: ${baseQuestion.question}`;
          break;
        case 2:
          questionText = `${starter} a ${level} ${category.replace('-', ' ')} ${context}?`;
          break;
        case 3:
          questionText = `In a ${level} ${category.replace('-', ' ')} ${context} ${scenario.toLowerCase()}: ${baseQuestion.question.toLowerCase()}`;
          break;
      }

      // Shuffle options to create more variety
      const shuffledOptions = [...baseQuestion.options];
      const correctOption = shuffledOptions[baseQuestion.correct];
      
      // Fisher-Yates shuffle
      for (let j = shuffledOptions.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [shuffledOptions[j], shuffledOptions[k]] = [shuffledOptions[k], shuffledOptions[j]];
      }
      
      const newCorrectIndex = shuffledOptions.indexOf(correctOption);

      questions.push({
        question: questionText,
        options: shuffledOptions,
        correct: newCorrectIndex,
        id: `${category}_${level}_${baseQuestion.topic}_${i + 1}`,
        topic: baseQuestion.topic
      });
    }

    return questions;
  }

  setupEventListeners() {
    document.getElementById('injury-type').addEventListener('change', this.checkStartButton.bind(this));
    document.getElementById('difficulty-level').addEventListener('change', this.checkStartButton.bind(this));
    document.getElementById('start-quiz').addEventListener('click', this.startQuiz.bind(this));
    document.getElementById('next-question').addEventListener('click', this.nextQuestion.bind(this));
    document.getElementById('retry-quiz').addEventListener('click', this.retryQuiz.bind(this));
    document.getElementById('done-quiz').addEventListener('click', this.finishQuiz.bind(this));
  }

  checkStartButton() {
    const injuryType = document.getElementById('injury-type').value;
    const difficulty = document.getElementById('difficulty-level').value;
    const startButton = document.getElementById('start-quiz');
    
    startButton.disabled = !injuryType || !difficulty;
  }

  startQuiz() {
    const injuryType = document.getElementById('injury-type').value;
    const difficulty = document.getElementById('difficulty-level').value;
    
    // Get questions for selected type and difficulty
    const allQuestions = this.questions[injuryType][difficulty];
    
    // Filter out already used questions
    const availableQuestions = allQuestions.filter(q => !this.usedQuestionIds.has(q.id));
    
    // If we've used all questions, reset the used questions set
    if (availableQuestions.length < 10) {
      this.usedQuestionIds.clear();
      availableQuestions.push(...allQuestions);
    }
    
    // Randomly select 10 unique questions
    this.quizQuestions = this.shuffleArray([...availableQuestions]).slice(0, 10);
    
    // Mark these questions as used
    this.quizQuestions.forEach(q => this.usedQuestionIds.add(q.id));
    
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];

    // Show quiz screen
    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';

    this.displayQuestion();
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  displayQuestion() {
    const question = this.quizQuestions[this.currentQuestionIndex];
    
    document.getElementById('question-number').textContent = this.currentQuestionIndex + 1;
    document.getElementById('progress-bar').value = this.currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.className = 'option-button';
      button.addEventListener('click', () => this.selectAnswer(index));
      optionsContainer.appendChild(button);
    });

    document.getElementById('next-question').style.display = 'none';
  }

  selectAnswer(selectedIndex) {
    const question = this.quizQuestions[this.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-button');
    
    // Disable all buttons
    buttons.forEach(button => button.disabled = true);
    
    // Show correct/incorrect
    buttons.forEach((button, index) => {
      if (index === question.correct) {
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
      } else if (index === selectedIndex && selectedIndex !== question.correct) {
        button.style.backgroundColor = '#f44336';
        button.style.color = 'white';
      }
    });

    // Track answer
    this.selectedAnswers.push({
      question: question.question,
      selected: selectedIndex,
      correct: question.correct,
      isCorrect: selectedIndex === question.correct
    });

    if (selectedIndex === question.correct) {
      this.score++;
    }

    // Show next button
    document.getElementById('next-question').style.display = 'block';
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    
    if (this.currentQuestionIndex < this.quizQuestions.length) {
      this.displayQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    const percentage = (this.score / 10) * 100;
    document.getElementById('score-text').textContent = `You scored ${this.score} out of 10 (${percentage}%)`;

    let resultsSummary = `<h4>Results Summary:</h4>`;
    resultsSummary += `<p><strong>Correct answers:</strong> ${this.score}/10</p>`;
    
    if (percentage >= 70) {
      resultsSummary += `<p style="color: green;"><strong>Great job!</strong> You have a good understanding of this topic.</p>`;
      document.getElementById('retry-quiz').style.display = 'none';
    } else {
      resultsSummary += `<p style="color: red;"><strong>Keep studying!</strong> You might want to review this topic and try again.</p>`;
      document.getElementById('retry-quiz').style.display = 'inline-block';
    }

    resultsSummary += `<details><summary>Review Your Answers</summary><ul>`;
    this.selectedAnswers.forEach((answer, index) => {
      const status = answer.isCorrect ? '✅' : '❌';
      resultsSummary += `<li>${status} Question ${index + 1}: ${answer.isCorrect ? 'Correct' : 'Incorrect'}</li>`;
    });
    resultsSummary += `</ul></details>`;

    document.getElementById('results-summary').innerHTML = resultsSummary;
  }

  retryQuiz() {
    this.startQuiz();
  }

  finishQuiz() {
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    
    // Reset selections
    document.getElementById('injury-type').value = '';
    document.getElementById('difficulty-level').value = '';
    this.checkStartButton();
  }
}

// Initialize quiz system when page loads
document.addEventListener('DOMContentLoaded', () => {
  new QuizSystem();
});
