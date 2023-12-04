#import "@preview/chic-hdr:0.3.0": *
#import "@preview/rose-pine:0.1.0": apply
#import "@preview/codly:0.1.0": *

#let project = (name: "", description: [], black: false, cols: 1, dark: false, doc) => {
  show: it => {
    if black {
      it
    } else {
      apply(variant: if dark { "rose-pine" } else { "rose-pine-dawn" })(it)
    }
  }

  show: codly-init.with()
  codly(languages: ());

  align(
    center + horizon,
    text(size: 35pt, heading(level: 1, outlined: false)[#name]),
  )
  align(center + horizon, text(size: 20pt, description))
  align(
    center + bottom,
  )[#outline(title: "Sommaire", fill: line(length: 100%, stroke: (dash: "dotted")))]
  pagebreak()

  show: chic.with(
    chic-footer(center-side: chic-page-number()),
    chic-header(left-side: emph(chic-heading-name()), right-side: smallcaps(name)),
    chic-separator(1pt),
    chic-offset(7pt),
    chic-height(1.5cm),
  )
  set heading(numbering: "I.1.A.a - ")
  show heading: set text(size: 12pt)
  set terms(separator: ": ")

  if cols > 1 {
    columns(cols)[#doc]
  } else {
    doc
  }
}