const reviews = [
  {
    id:1 ,
    title:"NEVER OUTSHINE THE MASTER"  ,
    idea:`• Present your ideas in such a manner that they may be ascribed to your master
            or could be viewed as an echo of your master’s thoughts
            • If you are more intelligent than your master, act as if you are not.
            • Never take your position for granted.
            • Never let favors you receive go to your head.
            • Discreet flattery is much more powerful. Make it seem like you want to seek his
            expertise and advice.`,
  
  },
  {
    id:2 ,
    title: "NEVER PUT TOO MUCH TRUST IN FRIENDS, LEARN HOW TO USE ENEMIES"   ,
    idea:`• Do not rely on friends. They will never be totally honest with you. They will not
            openly disagree with you in order to avoid arguments.
            • Enemies expect nothing so they will be surprised when you are generous.
            • An enemy spared the guillotine will be more grateful to you than a friend.
            • When you decide to hire a friend you will discover qualities she has kept hidden.
            • Skill and competence are more important than friendly feelings.
            • Hiring friends will limit your power.
            • All working situations require a kind of distance between people.
            • You destroy an enemy when you make a friend of him.
            • An enemy at your heels keeps you sharp, alert, and focused.`
  
  },
  {
    id: 3,
    title:  `COURT ATTENTION AT ALL COST`  ,
    idea:`• Surround your name with the sensational and the scandalous.
            • Create an air of mystery.
            • It is better to be attacked and slandered than ignored.
            • Make yourself appear larger than life.
            • Any sort of notoriety will bring you power.`
  
  },
  {
    id:4 ,
    title:  `GET OTHERS TO DO THE WORK FOR YOU, BUT ALWAYS TAKE THE
         CREDIT.`  ,
    idea:`• Save time and energy by hiring others to do the work.
          • Your helpers will be forgotten and you will be remembered.
          • Borrow from history. Use the past and profit by others’ experience.
          • You can only exploit others’ talents if your position is unshakable.`

    

  },
  {
    id: 5,
    title: `WIN THROUGH YOUR ACTIONS, NEVER THROUGH ARGUMENT.`   ,
    idea:`• Demonstrate, do not explicate.
          • Arguing will only offend your superior.
          • Learn to demonstrate the correctness of your ideas indirectly.
          • Choose your battles carefully.
          • Don’t bother demonstrating if time and experience will eventually teach the other
          person what you are trying to say. Save your energy and walk away.
          • No one can argue with a demonstrated proof.`
   
  },
  {
    id:6 ,
    title:`LEARN TO KEEP PEOPLE DEPENDENT ON YOU.`    ,
    idea:`• Be the only one who can do what you do. Make the fate of those who hire you so
          entwined with yours they cannot possibly get rid of you.
          • If you are ambitious, it is wiser to seek out weak masters with whom you can
          create a relationship of dependency.
          • Possess a talent or creative skill that sets you apart from the crowd.
          • By knowing other people’s secrets and holding information they wouldn’t want
          made public, you seal your fate with theirs.`


  },
  {
    id:7 ,
    title: `USE SELECTIVE HONESTY AND GENEROSITY TO DISARM YOUR
         VICTIM.`   ,
    idea:`• The essence of deception is distraction. An act of kindness, generosity, or
          honesty will distract and disarm people and turn them into gullible children.
          • Give before you take.
          • Nothing in the realm of power is set in stone. Overt deceptiveness may
          sometimes cover your tracks. If you have a history of deceit behind you, then
          play the rogue, be consistent and this will be interpreted as you simply being
          yourself. Your dishonesty becomes an act of honesty.`


  },
  {
    id: 8,
    title:  `POSE AS A FRIEND, WORK AS A SPY.`  ,
    idea:`• Show no mercy. Crush your rivals or else you will give them time to regroup and
            plot their revenge.
            • Banish enemies or plot for the best time to render them harmless.
            • Leave your enemies no options.
            • Sometimes enemies will destroy themselves.
            • Thoughts of reconciliation will open you up to attack.`


  },
  {
    id: 9,
    title: `USE ABSENCE TO INCREASE RESPECT AND HONOR.`   ,
    idea:`• Create value through scarcity. Make yourself less accessible; otherwise the aura
           you have created around yourself will wear away.`


  },
  {
    id:10 ,
    title:  `DO NOT COMMIT TO ANYONE.`  ,
    idea:`By refusing to commit, but allowing yourself to be courted, you become powerful
          because you are ungraspable.
          • As your reputation for independence grows, more people will desire you and want to
          conquer you.
          • Politely decline. You cannot allow yourself to feel obligated to anyone.
          • Seek promises from both sides, so no matter what the outcome of an election or
          battle, your position is secure.
          • Observe quarreling parties and stay neutral but supportive to both sides. Gain power
          as a mediator.
          • You may commit to one to prove you are capable of attachment, but be emotionally
          uninvolved. Preserve the unspoken option of being able to leave anytime and reclaim
          your freedom. The friends you made while being courted will help you jump ship.`

  },
  {
    id: 11,
    title: `. USE THE SURRENDER TACTIC: TRANSFORM WEAKNESS INTO
      POWER.`   ,
    idea:`• Do not fight aggression with aggression. Put your opponent off-guard by yielding, and
          in effect have more control over the situation.
          • Surrender is a way of mocking your enemies.
          • Surrender disguises your real motives and allows time to plan your next move.`


  },
  {
    id:12 ,
    title:`CONCENTRATE YOUR FORCES`    ,
    idea:`• Single-mindedness of purpose and total concentration on one goal will overwhelm
          the enemy every time.
          • A single patron appreciates your loyalty and becomes dependent on your services.
          • In the arts, being too single-minded can make you an intolerable bore.`


  },
  {
    id:13 ,
    title: `PLAY THE PERFECT COURTIER.`   ,
    idea:`• Arrange to be noticed.
• Alter your style and language according to the person you are dealing with.
• Never be the bearer of bad news.
• Never affect friendliness and intimacy with your master.
• Never criticize those above you directly.
• Never joke about appearances or taste.
• Do not be the court cynic.
• Be self-observant.
• Master your emotions.
• Fit the spirit of the times.
• Be a source of pleasure.`

  },
  {
    id: 14,
    title:  `RE-CREATE YOURSELF.`  ,
    idea:`• Control your appearances and emotions. Play sincere, but not necessarily be
          sincere.
          • Create a memorable character. Do not limit yourself to the role society assigns to
          you.`

  },
  {
    id:15 ,
    title:  `KEEP YOUR HANDS CLEAN.`  ,
    idea:`• Conceal your mistakes. Your good name and reputation depends more on what you
          conceal than on what you reveal.
          • Always have a convenient scapegoat.
          • Never do the dirty work yourself.`

  },
  {
    id: 16,
    title: `ENTER ACTION WITH BOLDNESS.`   ,
    idea:`• The bolder the lie, the better.
          • Lions circle the hesitant prey.
          • Boldness strikes fear; Fear creates authority.
          • Going halfway digs the deeper grave. Do not negotiate if you opponent will more
             likely take the opportunity to destroy you.
          • Hesitation creates gaps. Boldness obliterates them. Move swiftly and surely.
          • Audacity separates you from the herd.`

  },
  {
    id: 17,
    title:  `PLAN ALL THE WAY TO THE END.`  ,
    idea:`• Take into account all possible obstacles and circumstances that may prevent you
          from achieving your goal, and plan how you will overcome them.
          • When you see several steps ahead, you will no longer need to improvise along the
          way, and risk deviating from your plan.
          • Prepare alternatives and be open to adapt new routes to your goal.`

  },  {
    id: 18,
    title: `MAKE YOUR ACCOMPLISHMENTS SEEM EFFORTLESS.`   ,
    idea:`• What imitates nature by appearing effortless and natural approximates nature’s
          power.
          • Never show your work until it is finished. When people see the effort and time it takes
          to make it, and if they witness a work-in-progress, the magic of the finished piece is
          spoiled.`

  },
      {
        id: 19 ,
        title:`PLAY TO PEOPLE’S FANTASIES` ,
        idea:`• People need a fantasy to escape from the humdrum of everyday life. The more
              vague and exotic, the more captivating.
              • Promise a pot of gold and instant gratification, rather than a gradual improvement
              through hard work.
              • Keep your distance so the fantasy remains intact.`,
      },
      {
        id:  20,
        title:`DISCOVER EACH MAN’S THUMBSCREW.` ,
        idea:`• Every person has a weakness or insecurity you can use to your advantage.
              • Train yourself to probe for weaknesses in everyday conversation.
              • Find the childhood need that went unfulfilled, supply it, and your victim will be unable
              to resist you.
              • People’s weaknesses are the opposite of the qualities they reveal to you. The shy
              person is actually dying for attention; a prude may be hiding a lascivious soul, etc.
              • Find the weak link or the one person in a group who will bend under pressure.
              • Feed on uncontrollable emotions or motive – paranoia, lust, greed, vanity, or hatred.
              • When searching for suckers, always look for the unhappy, insecure and dissatisfied.`,
      },
      {
        id:21  ,
        title:`MASTER THE ART OF TIMING` ,
        idea:`• Never look as though you are in a hurry. It betrays a lack of control.
              • Learn to stand back and be patient. Strike only when the time is right.
              • Anticipate events and work with the spirit of the times.
              • Recognizing the prevailing winds does not necessarily mean running with them.`,
                    },
      {
        id: 22 ,
        title:`DISDAIN THINGS YOU CANNOT HAVE: IGNORING THEM IS THE
         BEST REVENGE.` ,
        idea:`• The more attention you pay an enemy, the stronger you make him. The less interest you
            show, the more superior you seem.
            • Remember: You choose to let things bother you. You can just as easily choose to
            consider the matter trivial and unworthy of your interest. That is the powerful move.
            • If it is impossible to ignore, then secretly get rid of it. Sometimes threats just go away by
            themselves.`,
      },
      {
        id: 23 ,
        title:`CREATE COMPELLING SPECTACLES.` ,
        idea:`• Never neglect the way you arrange things visually.
              • Associate yourself with colors, images and symbols that communicate strong
              messages.
              • People are always impressed by the superficial appearance of things, the grand, and
              the spectacular, what is larger than life.`,
      },
      {
        id:24  ,
        title:`THINK AS YOU LIKE BUT BEHAVE LIKE OTHERS.` ,
        idea:`• Wise and clever people learn early on that they can display conventional behavior
              and mouth conventional ideas without having to believe in them.
              • Put on the mask appropriate to the group you are joining.`,
      },
      {
        id: 25 ,
        title:`STIR UP WATERS TO CATCH FISH` ,
        idea:`• Anger and emotion are strategically unproductive. Make your enemies angry but stay
              calm yourself.
              • Angry people usually end up looking ridiculous.
              • Nothing in the game of power is personal.
              • An occasional outburst may be powerful, but use anger too often and it loses its
              `,
      },
      {
        id: 26 ,
        title:`DESPISE THE FREE LUNCH.` ,
        idea:`• By paying your own way you stay free of gratitude. What is offered for free normally
              has a hidden obligation.
              • Generosity is a sign of power. Most powerful people spend freely and are not misers.
              • Use money as a way to give pleasure to others and win them over.`,
      },
      {
        id:27  ,
        title:`AVOID STEPPING INTO A GREAT MAN’S SHOES.` ,
        idea:`• Choose a different path and personal style if you are the daughter or son of a great
              person. You will forever be in your predecessor’s shadow unless you find a way to
              shine on your own.
              • Only after the father figure has been done away with will there be space to establish
              a new order.
              • Do not become complacent once you reach success and security. Prosperity makes
              us lazy. Writers like Tennessee Williams and Fyodor Dostoyevsky preferred the
              struggle to security; the way poverty or emotional difficulties pushed them to create
              good work.`,
      },
      {
        id: 28,
        title:`STRIKE THE SHEPHERD AND THE SHEEP WILL SCATTER.` ,
        idea:`• Within any group, trouble can be traced to a single source, the unhappy,
              chronically unsatisfied one who stirs up dissension and infects the group.
              Recognize troublemakers by their complaining nature. Separate him from the
              group.
              • In every group power is concentrated in the hands of one or two people. Human
              nature shows people will orbit around a single strong personality.`,
      },
      {
        id: 29 ,
        title:`WORK ON THE HEARTS AND MINDS OF OTHERS.` ,
        idea:`• Aim at the primary emotions: love, hate, and jealousy. Be alert to people’s
              individual psychologies and their basic emotional responses.
              • Maintain a stable of writers, artists, or intellectuals who are very good at
              appealing to people’s hearts and minds.`,
      },
      {
        id: 30 ,
        title:`NEVER APPEAR TOO PERFECT.` ,
        idea:`• Never underestimate the power of envy. Occasionally reveal a weakness, defect,
              or anxiety, or find new friends. It is the people in your own circle of peers who will
              be the first to envy your success.
              • Envy is often a problem for people who have great natural talent. You may think
              you are charming people with your natural talent when in fact they are coming to
              hate you for it.
              • To deflect envy, employ a display of weakness, or a harmless vice.
              • Envy is disguised sometimes as excessive praise, or slander and criticism. Win
              your revenge by ignoring the envious.
              • Reversal: Display the utmost disdain for those who envy you. Instead of hiding
              your perfection, make it obvious. Make every triumph an opportunity to make the
              envious squirm.`,
      },
    
 
];

export default reviews;
