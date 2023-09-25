import React, { Component } from 'react'
import './style.scss'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Chip,
  CardActions,
  Button,
} from '@mui/material'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainClassName: 'section-pricing',
      title: 'Pricing plans for teams of all sizes',
      data: [
        {
          id: 1,
          title: 'Basic',
          subtitle: 'Tier 1',
          price: 'IDR 240K',
          priceUnit: '/month',
          description: [
            'Record incoming goods',
            'Check out goods',
            'Record profits',
          ]
        },
        {
          id: 1,
          title: 'Business:',
          subtitle: 'Tier 2',
          price: 'IDR 320K',
          priceUnit: '/month',
          description: [
            'Record incoming and outgoing goods',
            'Recording Profits',
            'Can analyze sales results with CHART',
            'Support 7x24 Hours',
          ]
        },
        {
          id: 1,
          theme: 'dark-mode',
          title: 'Entrepreneur',
          subtitle: 'Tier 3',
          price: 'IDR 480K',
          priceUnit: '/month',
          description: [
            'Record incoming and outgoing goods',
            'Recording Profits',
            'Can analyze sales results with CHART',
            'Support 7x24 Hours',
            'Export data to Excel',
            'AI earnings prediction',
          ]
        },
      ]
    }
  }
  render() {

    const {
      state: {
        mainClassName,
        data,
        title,
      },
      props: {
        className,
      }
    } = this

    return (
      <section
        className={mainClassName + ' full-screen ' + (className || '')}
        id={mainClassName}
      >

        <Container className='container'>

          <div className='block-header'>
            <Typography variant='h4' component='h2'>{title}</Typography>
          </div>

          <div className='block-content'>
            {
              data?.length > 0 &&
              data.map((item, index) => {
                return (
                  <Card
                    className={'card ' + (item?.theme || '')}
                    variant="outlined"
                    key={'price-' + index}
                  >
                    <CardContent>
                      <Chip className='thick marbot' label={item?.subtitle} color="primary" />
                      <Typography variant='h5' component='h3'><b className='light'>{item?.title}</b></Typography>
                      <Typography variant='h4' component='h4'><b>{item?.price}</b><Typography component='span'>{item?.priceUnit}</Typography></Typography>

                      <CardActions>
                        <Button className='huge' variant='contained'>Buy Plan</Button>
                      </CardActions>
                      <List>
                        {
                          item?.description?.length > 0 &&
                          item.description.map((itemDescription, indexDescription) => {
                            return (
                              <ListItem
                                key={'price-description-' + indexDescription}
                              >
                                <ListItemIcon>
                                  <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={itemDescription} />
                              </ListItem>
                            )
                          })
                        }

                      </List>

                    </CardContent>
                  </Card>

                )
              })
            }

          </div>

        </Container>

      </section>
    )
  }
}
