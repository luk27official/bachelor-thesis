#!/bin/bash
# Use this script to convert random PDFs to PDF/A (e.g. figures).
# Unfortunately, ghostscript can not retain the PDF/A metadata. In result, if
# you use this on the thesis, it _will_ become PDF/A compliant (and SIS will
# accept it), but won't contain the magic PDF/A "stamp" and will show only as
# normal PDF-1.4. :(
gswin32 -dPDFA=1 -dBATCH -dNOPAUSE -dNoOutputFonts -sProcessColorModel=DeviceCMYK -sColorConversionStrategy=UseDeviceIndependentColor -sDEVICE=pdfwrite -dPDFACompatibilityPolicy=3 -sOutputFile="pdfa-thesis.pdf" "thesis.pdf"
#gswin32 -q -dNOPAUSE -dBATCH -dNoOutputFonts -sDEVICE=pdfwrite -dPDFA=2 -dPDFACompatibilityPolicy=1 -sColorConversionStrategy=RGB -dOverrideICC=true -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -dDownsampleColorImages=false -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dDownsampleGrayImages=false -sOutputFile=vystup.pdf thesis.pdf
# Notes:
#
# PDFACompatibilityPolicy=3 actually doesn't exist. A bug in ghostscript
# interprets is as something between 1 and 2, without unnecessary failing on
# various dumb errors.
#
# Add -dNoOutputFonts if you absolutely totally need to get rid of fonts in a
# figure PDF. Do not do that for the whole thesis though-- a thesis with
# removed font glyphs is not submittable!
