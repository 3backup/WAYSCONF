"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Contact.module.css";

export function Contact({ as: _Component = _Builtin.Grid }) {
  return (
    <_Component
      className={_utils.cx(_styles, "awards-faq-content_grid")}
      tag="div"
      id="Contact"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "awards-faq-content_grid-item")}
        id={_utils.cx(
          _styles,
          "w-node-f3dbbbf3-cf08-b314-dab5-e7565d6af61e-5d6af61d"
        )}
        tag="div"
      >
        <_Builtin.Heading tag="h1">{"Contact us"}</_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "is--paragraph-big",
            "is--text-color-silver"
          )}
        >
          {
            "If you have any questions or concerns, please write to us on LinkedIn or at"
          }
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "chip-wrapper")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "chip-icon", "is--awards")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20opacity%3D%220.12%22%20x%3D%222%22%20y%3D%223%22%20width%3D%2220%22%20height%3D%2218%22%20rx%3D%225%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%202.25H9.96644C8.59472%202.25%207.51929%202.24999%206.65494%202.32061C5.77479%202.39252%205.04769%202.54138%204.38955%202.87671C3.30762%203.42798%202.42798%204.30762%201.87671%205.38955C1.54138%206.04769%201.39252%206.77479%201.32061%207.65494C1.24999%208.51929%201.25%209.59472%201.25%2010.9664V11V13V13.0336C1.25%2014.4053%201.24999%2015.4807%201.32061%2016.3451C1.39252%2017.2252%201.54138%2017.9523%201.87671%2018.6104C2.42798%2019.6924%203.30762%2020.572%204.38955%2021.1233C5.04769%2021.4586%205.77479%2021.6075%206.65494%2021.6794C7.51927%2021.75%208.59469%2021.75%209.96637%2021.75H9.96642H10H14H14.0336H14.0336C15.4053%2021.75%2016.4807%2021.75%2017.3451%2021.6794C18.2252%2021.6075%2018.9523%2021.4586%2019.6104%2021.1233C20.6924%2020.572%2021.572%2019.6924%2022.1233%2018.6104C22.4586%2017.9523%2022.6075%2017.2252%2022.6794%2016.3451C22.75%2015.4807%2022.75%2014.4053%2022.75%2013.0336V13.0336V13V11V10.9664V10.9664C22.75%209.59469%2022.75%208.51927%2022.6794%207.65494C22.6075%206.77479%2022.4586%206.04769%2022.1233%205.38955C21.572%204.30762%2020.6924%203.42798%2019.6104%202.87671C18.9523%202.54138%2018.2252%202.39252%2017.3451%202.32061C16.4807%202.24999%2015.4053%202.25%2014.0336%202.25H14H10ZM5.07054%204.21322C5.48197%204.00359%205.9897%203.87996%206.77708%203.81563C7.57322%203.75058%208.58749%203.75%2010%203.75H14C15.4125%203.75%2016.4268%203.75058%2017.2229%203.81563C18.0103%203.87996%2018.518%204.00359%2018.9295%204.21322C19.7291%204.62068%2020.3793%205.27085%2020.7868%206.07054C20.9964%206.48197%2021.12%206.9897%2021.1844%207.77708C21.2494%208.57322%2021.25%209.58749%2021.25%2011V13C21.25%2014.4125%2021.2494%2015.4268%2021.1844%2016.2229C21.12%2017.0103%2020.9964%2017.518%2020.7868%2017.9295C20.3793%2018.7291%2019.7291%2019.3793%2018.9295%2019.7868C18.518%2019.9964%2018.0103%2020.12%2017.2229%2020.1844C16.4268%2020.2494%2015.4125%2020.25%2014%2020.25H10C8.58749%2020.25%207.57322%2020.2494%206.77708%2020.1844C5.9897%2020.12%205.48197%2019.9964%205.07054%2019.7868C4.27085%2019.3793%203.62068%2018.7291%203.21322%2017.9295C3.00359%2017.518%202.87996%2017.0103%202.81563%2016.2229C2.75058%2015.4268%202.75%2014.4125%202.75%2013V11C2.75%209.58749%202.75058%208.57322%202.81563%207.77708C2.87996%206.9897%203.00359%206.48197%203.21322%206.07054C3.62068%205.27085%204.27085%204.62068%205.07054%204.21322ZM6.41603%207.37596C6.07138%207.1462%205.60573%207.23933%205.37596%207.58397C5.1462%207.92862%205.23933%208.39427%205.58398%208.62404L6.58398%209.2907L6.70034%209.36829L6.70035%209.3683C8.19864%2010.3674%209.09026%2010.9619%2010.0527%2011.2519C11.3227%2011.6346%2012.6773%2011.6346%2013.9473%2011.2519C14.9097%2010.9619%2015.8014%2010.3674%2017.2997%209.36829L17.416%209.2907L18.416%208.62404C18.7607%208.39427%2018.8538%207.92862%2018.624%207.58397C18.3943%207.23933%2017.9286%207.1462%2017.584%207.37596L16.584%208.04263C14.9337%209.14281%2014.2367%209.59812%2013.5145%209.81569C12.5268%2010.1133%2011.4732%2010.1133%2010.4855%209.81569C9.76334%209.59812%209.0663%209.14281%207.41603%208.04263L7.41597%208.04259L6.41603%207.37596Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "is--caption", "no-wrap")}
            tag="div"
          >
            {"startup@waysconf.com"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "is--paragraph",
            "is--text-color-silver"
          )}
        >
          {
            "Usually we answer within a few hours, but it can take up to 2-3 business days in more complex case."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "awards-faq-content_grid-item-tomek")}
        id={_utils.cx(
          _styles,
          "w-node-f3dbbbf3-cf08-b314-dab5-e7565d6af629-5d6af61d"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "awards-faq-content_grid-item-tomek_photo"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d1ab_1604246055042.webp"
        />
        <_Builtin.Heading tag="h4">{"Pola Ligaj"}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "awards-faq-content_grid-item-tomek_info"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "is--caption")}
            tag="div"
          >
            {"Coordinator"}
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "awards-faq-content_grid-item-tomek_info-link"
            )}
            button={false}
            block="inline"
            options={{
              href: "https://www.linkedin.com/in/pola-ligaj-81647719b/",
              target: "_blank",
            }}
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%208C17.5913%208%2019.1174%208.63214%2020.2426%209.75736C21.3679%2010.8826%2022%2012.4087%2022%2014V21H18V14C18%2013.4696%2017.7893%2012.9609%2017.4142%2012.5858C17.0391%2012.2107%2016.5304%2012%2016%2012C15.4696%2012%2014.9609%2012.2107%2014.5858%2012.5858C14.2107%2012.9609%2014%2013.4696%2014%2014V21H10V14C10%2012.4087%2010.6321%2010.8826%2011.7574%209.75736C12.8826%208.63214%2014.4087%208%2016%208V8Z%22%20fill%3D%22white%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M6%209H2V21H6V9Z%22%20fill%3D%22%23F4F5F9%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M4%206C5.10457%206%206%205.10457%206%204C6%202.89543%205.10457%202%204%202C2.89543%202%202%202.89543%202%204C2%205.10457%202.89543%206%204%206Z%22%20fill%3D%22%23F4F5F9%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E" />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "awards-faq-content_grid-item-tomek")}
        id={_utils.cx(
          _styles,
          "w-node-f3dbbbf3-cf08-b314-dab5-e7565d6af632-5d6af61d"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "awards-faq-content_grid-item-tomek_photo"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d1ad_1626879220013%20(1).webp"
        />
        <_Builtin.Heading tag="h4">{"Michał Sukiennik"}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "awards-faq-content_grid-item-tomek_info"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "is--caption")}
            tag="div"
          >
            {"Coordinator"}
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "awards-faq-content_grid-item-tomek_info-link"
            )}
            button={false}
            block="inline"
            options={{
              href: "https://www.linkedin.com/in/michal-sukiennik/",
              target: "_blank",
            }}
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%208C17.5913%208%2019.1174%208.63214%2020.2426%209.75736C21.3679%2010.8826%2022%2012.4087%2022%2014V21H18V14C18%2013.4696%2017.7893%2012.9609%2017.4142%2012.5858C17.0391%2012.2107%2016.5304%2012%2016%2012C15.4696%2012%2014.9609%2012.2107%2014.5858%2012.5858C14.2107%2012.9609%2014%2013.4696%2014%2014V21H10V14C10%2012.4087%2010.6321%2010.8826%2011.7574%209.75736C12.8826%208.63214%2014.4087%208%2016%208V8Z%22%20fill%3D%22white%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M6%209H2V21H6V9Z%22%20fill%3D%22%23F4F5F9%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M4%206C5.10457%206%206%205.10457%206%204C6%202.89543%205.10457%202%204%202C2.89543%202%202%202.89543%202%204C2%205.10457%202.89543%206%204%206Z%22%20fill%3D%22%23F4F5F9%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E" />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
