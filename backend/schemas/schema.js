import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import abouts from './abouts'
import brands from './brands'
import contact from './contact'
import experiences from './experiences'
import skills from './skills'
import testimonials from './testimonials'
import workExperience from './workExperience'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   testimonials, brands, abouts, skills, workExperience, experiences, contact
  ]),
})
